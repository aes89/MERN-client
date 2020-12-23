import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import styles from "../styles/loginSignup.module.css";
// import store from "../../index";
import {loginUser} from '../../services/authServices'
import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const Login = ({ actions, loggedIn}) => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,

    onSubmit: async (values) => {
      loginUser({ ...values }).then(() => {
        actions.logIn({ ...values })
        history.push("/")

    }).catch((error) => {
      //console.log("errors")
      //console.log(error.response)
        if (error.response && error.response.status === 401)
        formik.setStatus("Authentication failed. Please check your username and password.")
        else   
        formik.setStatus("There may be a problem with the server. Please try again after a few moments.")
    })	
    },
  });

  return (
    <div class={styles.loginSignupBox}>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email </label>
        {formik.status && (
          <div>Error: {formik.status}. Please try signing in again.</div>
        )}
        <input
          id="loginEmail"
          name="email"
          type="email"
          class="loginEmail"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          id="loginPassword"
          name="password"
          type="password"
          class="loginPassword"
          placeholder="Enter Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <div>
          <button
            class={styles.loginSignupButtons}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logIn: ({ email, password }) =>
      dispatch({ type: "login", payload: { email, password } }),
    logout: () => dispatch({ type: "logout" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
