import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import styles from "./userSettings.module.css";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
import {
  getUserSettings,
  updateUserSettings,
  getUsername,
  setUsername,
} from "../../services/authServices";
import ProfileImage from "../profileImage";
import Logo from "../logo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import ProfileDefault from "../styles/imgs/profileDefault.png";
//MATERIAL
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password =
      "Password must contain 8 characters, with 1 upper and lower case character, 1 number and 1 special character.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      values.confirmPassword
    )
  ) {
    errors.confirmPassword =
      "Password must contain 8 characters, with 1 upper and lower case character, 1 number and 1 special character.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

const UserSettings = ({ actions, currentUserSettings, userLoggedIn }) => {
  const classes = useStyles();
 let history = useHistory();
  useEffect(() => {
    getUserSettings(getUsername())
      .then((user) => {
        console.log(user)
        actions.settings(user);
        actions.updateUsername(user.username);
        setUsername(user.username);
      })
      .then(() => {
        console.log(currentUserSettings);
      })   
      .catch((error) => {
        console.log("errors");
        console.log(error.response);
        if (error.response && error.response.status === 404)
          formik.setStatus("Error getting user information ");
        else
          formik.setStatus(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",

      email: "",

      password: "",

      confirmPassword: "",
    },

    validate,   

    onSubmit: (values) => {
      updateUserSettings({ ...values }, userLoggedIn)
        .then((user) => {
          console.log(user);
          actions.settings({ ...user });
          actions.updateUsername(user.username);
          setUsername(user.username);
          history.push("/user/"+getUsername()+"/account-settings")
        })
        .catch((error) => {
          //console.log("errors")
          //console.log(error.response)
          if (error.response && error.response.status === 404)
            formik.setStatus("Error getting user information ");
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
    },
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>User Settings</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
              <div class={styles.settingsBox}>
                {formik.status && <div>Error: {formik.status}. </div>}

                <form onSubmit={formik.handleSubmit}>
                  <div class={styles.profileBox}>
                    {currentUserSettings.profile ? (
                      <img src={currentUserSettings.profile} />
                    ) : (
                      <img src={ProfileDefault} />
                    )}
                  </div>
                  <label htmlFor="photo" class={styles.profileBox}>
                    Update Profile Picture
                  </label>
                      <div class={styles.fileBox}>
                        <ProfileImage />
                        {/* <input
                          id="file"
                          name="file"
                          type="file"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "file",
                              event.currentTarget.files[0]
                            );
                          }}
                          //not sure what this does
                          // https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
                          onSubmit={(values) => {
                            console.log({
                              fileName: values.file.username,
                              type: values.file.type,
                              size: `${values.file.size} bytes`,
                            });
                          }}
                        /> */}
                      </div>
                  <label htmlFor="username">Username</label>

                  <input
                    id="userSettingsName"
                    name="username"
                    type="text"
                    placeholder={currentUserSettings.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />

                  {formik.touched.username && formik.errors.username ? (
                    <div>{formik.errors.username}</div>
                  ) : null}

                  <label htmlFor="email">Email Address</label>

                  <input
                    id="userSettingsEmail"
                    name="email"
                    type="email"
                    placeholder={currentUserSettings.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}

                  <label htmlFor="password">Password</label>

                  <input
                    id="userSettingsPassword"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}

                  <label htmlFor="confirmPassword">Password</label>

                  <input
                    id="userSettingsConfirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Retype Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />

                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                  ) : null}

                  <Button class={styles.updateButton} type="submit">
                    Update Details
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUserSettings: state.currentUserSettings,
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: ({ email, username, profile }) =>
      dispatch({ type: "settings", payload: { email, username, profile } }),
    updateUsername: (username) =>
      dispatch({ type: "updateUsername", payload: username }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
