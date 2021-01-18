import { shallow } from "enzyme";
import React from "react";

import Footer from ".";

it("renders a snapshot", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
