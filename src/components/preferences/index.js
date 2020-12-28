import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import preferencesList from "./list";
import getUserPreferences from "../../utils/get-user-preferences";
import {getPreference, updatePreference ,getUsername, setUsername } from '../../services/authServices'
import Logo from "../logo";
import styles from "./preferences.module.css";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";


//MATERIAL
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
  const classes = useStyles();

//change this to get user preferences from DB
 useEffect(() => {
     actions.updatePreferences(getUserPreferences());
  }, []);



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
    <div className={classes.root}>
        <Grid container spacing={0}>
             <Grid container item xs={12} spacing={0}>
              <Logo />
              <Grid item xs={12} spacing={2}>
              <h1 class={appstyles.headings}>Preferences</h1>
              </Grid>  
              <Grid item xs={12} spacing={2}>
                <div class={appstyles.layoutContent}>
                  <div className={styles.prefBox}>

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
                            {/*<Checkbox/>*/}
                            {preference}
                          </label>
                        ))}
                        {/* what was the name of your preference name tag on the checkbox? Preferences? plural? */}
                        {/* so the reqest will be req.body.preference ? */}
            
                          <Button class={styles.updateButton} type="submit" onClick={formik.handleSubmit}>Update Preferences</Button>
                      </Form>
                    )}
                  </Formik>
                  </div>
                </div>
                </Grid>   
            </Grid>
      </Grid>
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
