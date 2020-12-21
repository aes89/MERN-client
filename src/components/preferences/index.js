import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import preferencesList from "./list";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const mappedValues = preferencesList.map((preference) => [preference, false]);

const Preferences = () => (
  <div>
    <h1>User Preferences</h1>
    <Formik
      initialValues={Object.fromEntries(mappedValues)}
      onSubmit={async (values) => {
        await sleep(500);
        // actions.submit;
        //needs to submit to database first, then need to update local state from database. Load on log in?? Can be slower but I don't think users can really doing anything else - they'll need the data immediately..
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
);

const mapDispatchToProps = (dispatch) => ({
  actions: {
    submit: () => dispatch({ type: "submit" }),
  },
});

ReactDOM.render(<Preferences />, document.getElementById("root"));

export default Preferences;
