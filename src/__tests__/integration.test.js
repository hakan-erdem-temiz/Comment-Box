import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/posts/1/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // Attemt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments").simulate("click");
  moxios.wait(() => {
    wrapped.update();
    //Expect to find a list of comments!
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
