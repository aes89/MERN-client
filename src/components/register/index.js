import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import Fade from 'react-reveal/Fade';
import styles from "../styles/loginSignup.module.css";
import { registerUser, setUsername } from "../../services/authServices";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //only accepting one character - look into later https://stackoverflow.com/questions/1721602/regex-for-matching-a-z-a-z-0-9-and
  //[a-zA-Z0-9_]{5,} to match at least five alphanumerics and the underscore
  //[a-zA-Z]+ to have at least one letter
  //[0-9]* to match zero to any occurrence of the given numbers range
  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/i.test(values.username)) {
    errors.username = "Invalid username characters";
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

const Register = ({ actions, userLoggedIn, modalId }) => {
  let history = useHistory();

   const text = {
      color: 'red',
    }; 

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },

    validate,
    onSubmit: async (values) => {
      //Attempt login on server- this is from auth services
      registerUser({ ...values })
        .then((r) => {
          console.log(r.username);
          actions.logIn(r.username);
          setUsername(r.username)
          actions.closeModal(); //add value in params{ ...values }
          history.push("/");
        })
        .catch((error) => {
          console.log("errors");
          console.log(error.response);
          console.log(`An error occurred authenticating: ${error}`);
          formik.setStatus(error.response.data.errors[0].email)
        });
    },
  });

  return (
    <div class={styles.loginSignupBox}>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>

        {formik.status && (
             <Fade bottom >
          <div style={text}>Error: {formik.status}. Please try registering in again.</div>
            </Fade>
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
          <Fade bottom >
          <div style={text}>{formik.errors.email}</div>
          </Fade>
        ) : null}

        <label htmlFor="username">Username</label>

        <input
          id="registerUsername"
          class="registerUsername"
          name="username"
          type="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />

        {formik.touched.username && formik.errors.username ? (
          <Fade bottom >
          <div style={text}>{formik.errors.username}</div>
          </Fade>
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
           <Fade bottom >
          <div style={text}>{formik.errors.password}</div>
           </Fade>
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
             <Fade bottom >
          <div style={text}>{formik.errors.confirmPassword}</div>
              </Fade>
        ) : null}
        <div>
          <Button
          variant="contained"
            className={styles.loginSignupButtons}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Sign Up
          </Button> 
          </div>
           <div>
           <Button variant="contained" className={styles.modalButton}onClick={() => actions.openModal("login")}>
              Login
            </Button>
            <Button variant="contained" className={styles.modalCancelButton}  onClick={actions.closeModal}>
              Cancel
            </Button>
                </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
  modalId: state.modalOpen.modal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    // register: ({ email, password, username }) =>
    //   dispatch({ type: "register", payload: { email, password, username } }),
    // logIn: ({ email, password, username }) =>
    //   dispatch({ type: "login", payload: { email, password, username } }),
    logIn: (username) => dispatch({ type: "login", payload: username }),
    openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
    closeModal: () => dispatch({ type: "closeModal" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
