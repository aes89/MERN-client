import { shallow } from "enzyme";
import React from "react";

import App from "./App";
import { getLoggedInUser } from "./services/authServices";

jest.mock("./services/authServices");

test("renders learn react link", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

it("Throws error when attempting to log in", () => {
  getLoggedInUser.mockImplementation(() => {
    throw new Error();
  });
  expect(shallow(<App />)).toMatchSnapshot();
});
