import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import preferencesList from "./list";
import api from "../../config/api";
import getUserPreferences from "../../utils/get-user-preferences";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const validate = (values) => {
  const errors = {};
  return errors;
};

const Preferences = ({ actions, userPreferences }) => {
  const formik = useFormik({
    validate,
    onSubmit: async (values) => {
      try {
        await api.pospatcht("/:username/edit", { ...values });
        // .then(() => actions.logIn());
      } catch (error) {
        console.log("preferences err err", JSON.parse(JSON.stringify(error)));
        formik.setStatus(JSON.parse(JSON.stringify(error)).message);
      }
    },
  });

  if (!userPreferences.preferences) {
    return null;
  }

  return (
    <div>
      <h1>User Preferences</h1>
      <Formik
        initialValues={Object.fromEntries(
          preferencesList.map((preference) => [
            preference,
            userPreferences.preferences[preference] || false,
          ])
        )}
        onSubmit={async (values) => {
          await sleep(500);
          // actions.submit;
          //needs to submit to database first, then need to update local state from database. Load on log in?? Can be slower but I don't think users can really doing anything else - they'll need the data immediately..
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            {preferencesList.map((preference, index) => (
              <label key={index}>
                <Field type="checkbox" name={preference} />
                {preference}
              </label>
            ))}
            {/* what was the name of your preference name tag on the checkbox? Preferences? plural? */}
            {/* so the reqest will be req.body.preference ? */}
            <button type="submit" onClick={formik.handleSubmit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userPreferences: state.userPreferences,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updatePreferences: (data) =>
      dispatch({ type: "updatePreferences", payload: data }),
    submit: () => dispatch({ type: "submit" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
