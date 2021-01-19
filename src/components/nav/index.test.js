import { shallow } from "enzyme";
import React from "react";

import { NavBarForTest as NavBar } from ".";

const mockProps = {
  actions: {},
  userLoggedIn: true,
  currentUserSettings: {},
  currentProfile: {},
};

it("renders a snapshot", () => {
  const wrapper = shallow(<NavBar {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
