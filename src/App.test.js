import React from "react";
import { shallow } from "enzyme";

// import { ExpansionPanelActions } from "@material-ui/core";
// import { shallow } from "enzyme";

// import Fridge from "./components/fridge/index";
import { AppForTest as App } from "./App";

it("renders", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
// import { getLoggedInUser } from "./services/authServices";

// jest.mock("./services/authServices");

// test("renders learn react link", () => {
//   expect(shallow(<App />)).toMatchSnapshot();
// });

// it("Throws error when attempting to log in", () => {
//   getLoggedInUser.mockImplementation(() => {
//     throw new Error();
//   });
//   expect(shallow(<App />)).toMatchSnapshot();
// });
// it("renders Account header", () => {
//   const wrapper = shallow(<App />);
//   const welcome = FridgeMate;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div"); // create the div here
//   ReactDOM.render(<App />, div);
// });
