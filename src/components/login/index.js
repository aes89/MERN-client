import React, {useState} from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import styles from "../styles/modals.module.css";
// import store from "../../index";
import {
  loginUser,
  setLoggedInUser,
  setUsername,
  setProfile,
} from "../../services/authServices";
import { useHistory } from "react-router-dom";
import Loading from "../loading";
import Button from "@material-ui/core/Button";
import Fade from 'react-reveal/Fade';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Login = ({ actions, loggedIn, modalId }) => {
  let history = useHistory();
 const [loading, setloading] = useState({ done: true });
  
  const text = {  
    color: "red",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,

    onSubmit: async (values) => {
      setloading({ done: false })
      loginUser({ ...values })
        .then((r) => {
          //console.log(r);
          setLoggedInUser(r.cookie.jwt);
          setUsername(r.user);
          setProfile(r.profile);
          //console.log("check profile", r.profile)
          actions.logIn(r.user);
          actions.updateProfile({...r});
          actions.getToken(r.cookie.jwt);
          actions.closeModal();
          history.push("/");
          toast.success("You are logged in!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Oh no!");
          if (error.response && error.response.status === 401)
            formik.setStatus(
              "Authentication failed. Please check your username and password."
            );
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
      setTimeout(() => {  
      setloading({ done: true })
      console.log("check loading done")  
            }, 2500);
    },
  });

  return (
   
            
    <div class={styles.loginSignupBox}>
    {!loading.done ? (
           <Loading/>
              ) : ( 
                <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        {formik.status && (
          <Fade bottom>
            <div style={text}>
              Error: {formik.status}. Please try signing in again.
            </div>
          </Fade>
        )}
        <label htmlFor="email">Email Address:</label>
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
          <Fade bottom>
            <div style={text}>{formik.errors.email}</div>
          </Fade>
        ) : null}
        <label htmlFor="password">Password:</label>
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
          <Fade bottom>
            <div>{formik.errors.password}</div>
          </Fade>
        ) : null}
        <div>
          <Button
            variant="contained"
            class={styles.loginSignupButtons}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Log In
          </Button>
          
        </div>
        <div>
        <div>
        <Button
         class={styles.modalCancelButton}
          onClick={() => actions.openModal("forgotPassword")}>
            Forgot Password?
          </Button>
        </div>
          <Button
            
            class={styles.modalButton}
            onClick={() => actions.openModal("register")}
          >
            New?..  Register here.
          </Button>
          <Button
          
            class={styles.modalCancelButton}
            onClick={actions.closeModal}
          >
            Cancel
          </Button>
        </div>
      </form>  
      </>
      )}
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userLoggedIn.username,
   modalId: state.modalOpen.modal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logIn: (username) => dispatch({ type: "login", payload: username }),
    updateProfile: ({ profile }) =>
      dispatch({ type: "updateProfile", payload: {profile } }),
    getToken: (jwt) => dispatch({ type: "token", payload: jwt }),
    logout: () => dispatch({ type: "logout" }),
    openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
    closeModal: () => dispatch({ type: "closeModal" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
