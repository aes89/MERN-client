import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, useFormik } from "formik";

import {preferencesList, preferencesName } from "./list";

import {
  getPreference,
  updatePreference,
  getUsername,
  getPref,
  setPref
} from "../../services/authServices";

import Logo from "../logo";
import Loading from "../loading";

import styles from "./preferences.module.css";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";

import pantrycartoon from "../styles/imgs/pantrycartoon.png";


//MATERIAL
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fadein from '@material-ui/core/Fade';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//need to write input validation - boolean only
const validate = (values) => {
  const errors = {};
  return errors;
};

// preferences component, is passed:
// userPreferences which is state?
// actions: which is submit (to db) and get payload/data from db.
const Preferences = ({ actions, userPreferences, userLoggedIn }) => {
  const classes = useStyles();
   let history = useHistory();
   const [checked, setChecked] = useState(null);
   const [loading, setloading] = useState({ done: false });



  // On page load- This is calling the DB get request to get the initial user preference data
  useEffect(() => {
    getPreference(getUsername())
      .then((pref) => {
        setPref({ ...pref })
        actions.updatePreferences(JSON.parse(getPref()));
        setChecked(JSON.parse(getPref()))
        //console.log("check local", JSON.parse(getPref()))
        //console.log("check redux", userPreferences)
      })
      .catch((error) => {
        //console.log("errors");
        //console.log(error.response);
        if (error.response && error.response.status === 404)
          //formik.setStatus("Error getting pref information ");
          toast.error("Sorry we could not get your information at this time.")
        else
          // formik.setStatus(
          //   "There may be a problem with the server. Please try again after a few moments."
          // );
          toast.error("There may be a problem with the server. Please try again after a few moments.")
      });
        setTimeout(() => {
        setloading({ done: true })
        //console.log("check loading done")  
        }, 3000);
  }, []);


  const formik = useFormik({
    //calls boolean validation
    validate,
  });

  function submitHandler (values) {
      //console.log("check",  values )
       setloading({ done: false })
          updatePreference({ ...values }, getUsername())
            .then((pref) => {
              //console.log(pref);
              setPref(pref)
              actions.updatePreferences(pref);
              setTimeout(() => {
                setloading({ done: true })
                 //console.log("check loading done")  
                 //console.log("test returned", JSON.parse(getPref()))
                 history.push("/preferences/"+getUsername())
                 toast.success("Preferences Updated!")
                }, 3000);
            })
            .catch((error) => {
              if (error.response && error.response.status === 404)
                //formik.setStatus("Error getting pref information ");
                toast.error("Sorry we could not submit your request at this time.")
              else
                // formik.setStatus(
                //   "There may be a problem with the server. Please try again after a few moments."
                // );
                 toast.error("There may be a problem with the server. Please try again after a few moments.")
            });
    }

  return (
    <div className={classes.root}>
    <Fadein in={true}  timeout={2000}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>Preferences</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
          {!loading.done ? (
           <Loading/>
              ) : (  
            <> 
                  <div class={appstyles.subheading}>Select from the preferences below and we will only show you recipes that match.</div>
                    <div className={styles.prefBox}>
                      
                          <div class={styles.formBox}>
                                  <Formik
                                    initialValues={{ "vegetarian": userPreferences.vegetarian,
                                      "vegan": userPreferences.vegan,
                                      "glutenFree": userPreferences.glutenFree,
                                      "dairyFree": userPreferences.dairyFree,
                                      "veryHealthy": userPreferences.veryHealthy,
                                      "cheap": userPreferences.cheap,
                                      "veryPopular": userPreferences.veryPopular,
                                      "sustainable": userPreferences.sustainable}}
                          
                                      onSubmit={async (values) => {
                                        await sleep(500);
                                        submitHandler(values)
                                      }}
                                >
                                  {({ values }) => (
                                    <Form>
                                      {/* form maps over list in ./list.js, can update more easily if needed */}
                                      {preferencesList.map((preference, index) => (
                                  
                                              <label key={index}>
                                                <Field  type="checkbox" name={preference}/>  
                                                 <span class={styles.prefItem}>{preferencesName[index]}</span>  
                                              </label>
                                    
                                       ))}
                                      <Button
                                        class={styles.updateButton}
                                        type="submit"   
                                      >
                                        Update Preferences
                                      </Button>
                                    </Form>
                                  )}
                                </Formik>
                        </div>
                      <div class={styles.imgBox}>
                        <img alt="cartoon ingredients" src={pantrycartoon} />
                      </div>
                    </div>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
      </Fadein>
    </div>
  );
};

//checks state
const mapStateToProps = (state) => ({
  userPreferences: state.userPreferences.preferences,
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
