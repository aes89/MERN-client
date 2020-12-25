import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import preferencesList from "./list";
import api from "../../config/api";
import getUserPreferences from "../../utils/get-user-preferences";
import Checkbox from '@material-ui/core/Checkbox';
import Logo from "../logo";
import {getPreference, updatePreference ,getUsername, setUsername } from '../../services/authServices'



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//need to write input validation - boolean only
const validate = (values) => {
  const errors = {};
  return errors;
};

// preferences component, is passed:
// userPreferences which is state?
// actions: which is submit (to db) and get payload/data from db.
const Preferences = ({ actions, userPreferences, userLoggedIn}) => {

  // On page load- This is calling the DB get request to get the initial user preference data
  useEffect(() => {
    getPreference(getUsername()).then((pref) => {
      actions.updatePreferences( { ...pref })
  }).then(() => {console.log(userPreferences)
 }).catch((error) => {
      console.log("errors")
      console.log(error.response)
      if (error.response && error.response.status === 404)
      formik.setStatus("Error getting pref information ")
      else   
      formik.setStatus("There may be a problem with the server. Please try again after a few moments.")
  })
},[])

  const formik = useFormik({
    //calls boolean validation
    validate,

   // This is calling the DB patch request to update the initial user preference data
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      updatePreference({ ...values }, userLoggedIn).then((pref) => {
        console.log(pref)
        actions.updatePreferences( { ...pref })
    }).catch((error) => {
      //console.log("errors")
      //console.log(error.response)
      if (error.response && error.response.status === 404)
      formik.setStatus("Error getting pref information ")
      else   
      formik.setStatus("There may be a problem with the server. Please try again after a few moments.")
    })
    },
  });

  //if no userPreferences (preferences in state returned from db) then show no selections
  if (!userPreferences.preferences) {
    return null;
  }

  return (
    // the form and HTML
    <div>
    <Logo/>
      <h1>User Preferences</h1>
      {formik.status && (
          <div>Error: {formik.status}. </div>
        )}
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
            {/* form maps over list in ./list.js, can update more easily if needed */}
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

//checks state
const mapStateToProps = (state) => ({
  userPreferences: state.userPreferences,
  userLoggedIn: state.userLoggedIn.username,
});

//updates state
const mapDispatchToProps = (dispatch) => ({
  actions: {
    updatePreferences: (data) =>
      dispatch({ type: "updatePreferences", payload: data }),
    submit: () => dispatch({ type: "submit" }),
  },
});

//sends to reducer
export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
