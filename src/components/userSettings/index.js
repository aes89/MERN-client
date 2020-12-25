import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import styles from "./userSettings.module.css";
import {getUserSettings, updateUserSettings} from '../../services/authServices'


const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
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

const UserSettings = ({ actions, currentUserSettings, userLoggedIn}) => {

  useEffect(() => {
    getUserSettings(userLoggedIn).then((user) => {
      actions.settings(user)
  }).then(() => {console.log(currentUserSettings)
 }).catch((error) => {
      console.log("errors")
      console.log(error.response)
      if (error.response && error.response.status === 404)
      formik.setStatus("Error getting user information ")
      else   
      formik.setStatus("There may be a problem with the server. Please try again after a few moments.")
  })
 
  },[])
  const formik = useFormik({
    initialValues: {
      username: "",

      email: "",

      password: "",

      confirmPassword: "",

      file: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      updateUserSettings({ ...values }).then((user) => {
        console.log(user)
        actions.settings( { ...user })
    }).catch((error) => {
      //console.log("errors")
      //console.log(error.response)
      if (error.response && error.response.status === 404)
      formik.setStatus("Error getting user information ")
      else   
      formik.setStatus("There may be a problem with the server. Please try again after a few moments.")
    })
    },
  });

  return (
    <div class={styles.layout}>
      <div class={styles.layoutContent}>
      <div className={styles.settingsBox}>
      <h1>User Settings:</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="photo">Photo</label>

        <input
          id="file"
          name="file"
          type="file"
          onChange={(event) => {
            formik.setFieldValue("file", event.currentTarget.files[0]);
          }}
          //not sure what this does
          // https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
          onSubmit={(values) => {
            console.log({
              fileName: values.file.name,
              type: values.file.type,
              size: `${values.file.size} bytes`,
            });
          }}
        />

        <label htmlFor="username">Username</label>

        <input
          id="userSettingsName"
          name="name"
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}

        <button type="submit">Update Details</button>
      </form>
      </div>
    </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  currentUserSettings: state.currentUserSettings,
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: ({email, username}) =>
      dispatch({ type: "settings", payload: {email, username}}),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);

