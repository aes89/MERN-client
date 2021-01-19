import React, { useEffect, useState } from "react";
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
  setProfile,
} from "../../services/authServices";

import ProfileImage from "../profileImage";
import Logo from "../logo";
import Loading from "../loading";

import ProfileDefault from "../styles/imgs/profileDefault.png";

import Fade from "react-reveal/Fade";
//MATERIAL
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fadein from "@material-ui/core/Fade";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [loading, setloading] = useState({ done: false });
  const text = {
    color: "red",
    marginLeft: "10px",
  };

  let history = useHistory();
  useEffect(() => {
    getUserSettings(getUsername())
      .then((user) => {
        actions.settings(user);
        actions.updateUsername(user.username);
        setProfile(user.profile);
        setUsername(user.username);
      })
      .then(() => {})
      .catch((error) => {
        if (error.response && error.response.status === 404)
          formik.setStatus(
            "Sorry we could not get your information at this time."
          );
        else
          formik.setStatus(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
    setTimeout(() => {
      setloading({ done: true });
    }, 4000);
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
      setloading({ done: false });
      updateUserSettings({ ...values }, userLoggedIn)
        .then((user) => {
          actions.settings({ ...user });
          actions.updateUsername(user.username);
          setUsername(user.username);
          setProfile(user.profile);
          history.push("/user/" + getUsername() + "/account-settings");
          toast.success("User information updated!");
        })
        .catch((error) => {
          toast.error("Oh no, error!");
          if (error.response && error.response.status === 404)
            formik.setStatus(
              "Sorry we could not submit your request at this time."
            );
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
      setTimeout(() => {
        setloading({ done: true });
      }, 3000);
    },
  });

  return (
    <div className={classes.root}>
      <Fadein in={true} timeout={2000}>
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <Logo />
            <Grid item xs={12} spacing={2}>
              <h1 class={appstyles.headings}>Account Settings</h1>
            </Grid>
            <Grid item xs={12} spacing={2}>
              <div class={appstyles.layoutContent}>
                {!loading.done ? (
                  <Loading />
                ) : (
                  <>
                    <div class={appstyles.subheading}>
                      Update your account settings below.
                    </div>

                    <div class={styles.settingsBox}>
                      <Fade bottom>
                        {formik.status && (
                          <div style={text}>Error: {formik.status}. </div>
                        )}
                      </Fade>
                      <form onSubmit={formik.handleSubmit}>
                        <div class={styles.profileBox}>
                          {currentUserSettings.profile ? (
                            <img
                              alt="profile of user"
                              src={currentUserSettings.profile}
                            />
                          ) : (
                            <img alt="default profile " src={ProfileDefault} />
                          )}
                        </div>
                        <label htmlFor="photo" class={styles.profileBox}>
                          Update Profile Picture
                        </label>
                        <div class={styles.fileBox}>
                          <ProfileImage />
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
                          <Fade bottom>
                            <div style={text}>{formik.errors.username}</div>
                          </Fade>
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
                          <Fade bottom>
                            <div style={text}>{formik.errors.email}</div>
                          </Fade>
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
                          <Fade bottom>
                            <div style={text}>{formik.errors.password}</div>
                          </Fade>
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
                          <Fade bottom>
                            <div style={text}>
                              {formik.errors.confirmPassword}
                            </div>
                          </Fade>
                        ) : null}

                        <Button
                          variant="contained"
                          class={styles.updateButton}
                          type="submit"
                        >
                          Update Details
                        </Button>
                      </form>
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
