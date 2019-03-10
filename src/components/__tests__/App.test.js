import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // NOT needed i use enyzme instead of this part
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);

  // expect(div.innerHTML).toContain("Comment Box");
  // expect(div).hasInstanceof(<App>);

  // //cleanup div
  // ReactDOM.unmountComponentAtNode(div);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
