import React from "react";
import { withRouter } from 'react-router-dom';
import { useFormik } from "formik";
import styles from "../styles/loginSignup.module.css";
import api from "../../config/api";
import { CallToActionSharp } from "@material-ui/icons";
import { connect } from "react-redux";
import {registerUser} from '../../services/authServices'



const validate = (values) => {
  const errors = {};

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
    // I feel like we don't need this twice??
    // } else if (
    //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
    //     values.confirmPassword
    //   )
    // ) {
    //   errors.confirmPassword =
    //     "Password must contain 8 characters, with 1 upper and lower case character, 1 number and 1 special character.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

const Register = ({ actions, register, history }) => {
  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",

      confirmPassword: "",
    },

    validate,

    onSubmit: async (values) => {
      //Attempt login on server- this is from auth services
      registerUser({ ...values }).then(() => {
        actions.register() //add value in params{ ...values }
        history.push("/")
          
      }).catch((error) => {
        console.log("errors")
        console.log(error.response)
        console.log(`An error occurred authenticating: ${error}`)
        //formik.setStatus(error.response.data.errors[0].email)
      })



      // try {
      //   await api
      //     .post("/user/register", { ...values })
      //     .then(() => actions.register({ ...values }));
      //    history.push("/");
      // } catch (error) {
      //   console.log("errors")
      //   console.log(error.response)
      //   console.log("register err", JSON.parse(JSON.stringify(error)));
      //   formik.setStatus(JSON.parse(JSON.stringify(error)).message);


      //   this needs to iterate over error
      //   formik.setStatus(error.response.data.errors[0].email);
      // }
    },
  });

  return (
    <div class={styles.loginSignupBox}>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>

        {formik.status && (
          <div>Error: {formik.status}. Please try registering in again.</div>
        )}

        <input
          id="registerEmail"
          class="registerEmail"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>

        <input
          id="registerPassword"
          class="registerPassword"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmPassword">Confirm Password</label>

        <input
          id="registerConfirmPassword"
          class="registerConfirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
        <div>
          <button
            class={styles.loginSignupButtons}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  registered: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    register: ({ email, password }) =>
      dispatch({ type: "register", payload: { email, password } }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
