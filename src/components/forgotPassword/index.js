import React,{useState} from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import styles from "../styles/modals.module.css";
// import store from "../../index";
import {
  forgotPassword,
} from "../../services/authServices";
import { useHistory } from "react-router-dom";


import Button from "@material-ui/core/Button";
import LockIcon from '@material-ui/icons/Lock';
import Fade from 'react-reveal/Fade';
import Loading from "../loading";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const ForgotPassword = ({ actions, loggedIn, modalId }) => {
  let history = useHistory();
  const [loading, setloading] = useState({ done: true });
  const text = {
    color: "red",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,

    onSubmit: async (values) => {
      setloading({ done: false });
      forgotPassword({ ...values })
        .then(async (r) => {
            //let res = await r
           await console.log(r);
           setTimeout(() => {
              setloading({ done: true });
              console.log("check loading done");
              toast.success("Reset Link Sent to your Email!");
              actions.closeModal();
              history.push("/");
            }, 6000); 
        })
        .catch((error) => {
          if (error.response && error.response.status === 403)
            formik.setStatus(
              "Sorry, we can't send you a link to reset your password."
            );
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
    },
  });

  return (

    <div class={styles.loginSignupBox}>
      <h1>Forgot Password</h1>
      <div style={{alignSelf: "center"}}>
      <LockIcon/>
      </div>
      {!loading.done ? (
              <div style={{maxHeight: "400px"}}><Loading/></div>
              ) : (
                <>
              <form onSubmit={formik.handleSubmit}>
                {formik.status && (
                  <Fade bottom>
                    <div style={text}>
                      Error: {formik.status}. Please try again.
                    </div>
                  </Fade>
                )}
                <label htmlFor="email">Email Address:</label>
                <input
                  id="loginEmail"
                  name="email"
                  type="email"
                  class="resetEmail"
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
                <div>
                  <Button
                    variant="contained"
                    class={styles.loginSignupButtons}
                    type="submit"
                    onClick={formik.handleSubmit}
                  >
                    Send Login Link
                  </Button>
                  
                </div>
                <div>
                <div>
              OR
                </div>
                  <Button
                    
                    class={styles.modalButton}
                    onClick={() => actions.openModal("register")}
                  >
                  Create New Account
                  </Button>
                  <Button
                    class={styles.modalCancelButton}
                    onClick={() => actions.openModal("login")}
                  >
                    Back to Login
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
    openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
    closeModal: () => dispatch({ type: "closeModal" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
