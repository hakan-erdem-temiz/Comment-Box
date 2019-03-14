import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;
beforeEach(() => {
  const initalState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapped = mount(
    <Root initalState={initalState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  console.log(wrapped.find("li").lenght);
});
