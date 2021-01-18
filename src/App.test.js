import React from "react";
import { mount, shallow } from "enzyme";
import { AppForTest as App } from "./App";

const simpleProps = {
  actions: {
    logIn: jest.fn(),
  },
};

it("renders", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

// it("Throws error when attempting to log in", () => {
//   getLoggedInUser.mockImplementation(() => {
//     throw new Error();
//   });
//   expect(shallow(<App />)).toMatchSnapshot();
// });
// it("renders Account header", () => {
//   const wrapper = shallow(<App />);
//   const welcome = "FridgeMate";
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

it.only("throws error", () => {
  mount(<App {...simpleProps} />);
  expect(simpleProps.actions.logIn).toHaveBeenCalledTimes(1);
});
