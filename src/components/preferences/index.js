import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const toggle = "toggle";

const preferencesList = [
  "vegetarian",
  "gluten free",
  "ketogenic",
  "vegan",
  "pescetarian",
  "paleo",
  "dairy",
  "egg",
  "gluten",
  "grain",
  "peanut",
  "seafood",
  "sesame",
  "shellfish",
  "soy",
  "sulphite",
  "tree nuts",
  "wheat",
];

const mappedValues = preferencesList.map((preference) => [preference, false]);

const Preferences = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={Object.fromEntries(mappedValues)}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => {
        console.log("value", values);
        return (
          <Form>
            {preferencesList.map((preference, index) => (
              <label key={index}>
                <Field type="checkbox" name={preference} />
                {preference}
              </label>
            ))}

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  </div>
);

ReactDOM.render(<Preferences />, document.getElementById("root"));

export default Preferences;
