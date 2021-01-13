import React from "react";
// import { Fridge } from "./index";
import Basic from "./basic";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

test("<Index /> should display an empty fridge list", () => {
  const requiredProps = { username: "Manualtest" };
  const store = { getState: () => {}, subscribe: () => {}, dispatch: () => {} };
  const { getByText } = render(
    <Provider store={store}>
      {/* <Fridge {...requiredProps} /> */}
      <Basic />
    </Provider>
  );

  expect(getByText("Fridge")).toBeInTheDocument();
});
