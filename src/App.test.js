import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

// import { ExpansionPanelActions } from "@material-ui/core";
// import { shallow } from "enzyme";

// import Fridge from "./components/fridge/index";
import App from "./App.js";
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

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
