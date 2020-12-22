import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import styles from "../../app.module.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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
  <div class={styles.layout}>
    <div class={styles.layoutContent}>
    <h1>User Preferences</h1>
    <Formik
      initialValues={Object.fromEntries(mappedValues)}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => {
        return (
          <Form>
            {preferencesList.map((preference, index) => (
              <label key={index}>
                <Field type="checkbox" name={preference} />
                {preference}
              </label>
            ))}
            {/* what was the name of your preference name tag on the checkbox? Preferences? plural? */}
            {/* so the reqest will be req.body.preference ? */}
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
    </div>
  </div>
);

ReactDOM.render(<Preferences />, document.getElementById("root"));

export default Preferences;
