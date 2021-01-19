import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import styles from "../styles/modals.module.css";
import {
  resetPassword,
  updatePasswordViaReset,
} from "../../services/authServices";
import { useHistory, useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import Fade from "react-reveal/Fade";
import Loading from "../loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validate = (values) => {
  const errors = {};

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
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

const ResetPassword = ({ actions, user, modalId }) => {
  let history = useHistory();
  const { token } = useParams();
  const [loading, setloading] = useState({ done: true });

  const text = {
    color: "red",
  };
  useEffect(() => {
    resetPassword(token)
      .then((res) => {
        actions.setUsername(res.username);
        setloading({ done: true });
      })
      .catch((error) => {
        toast.error("Password reset link is invalid or has expired");
        history.push("/");
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate,

    onSubmit: async (values) => {
      updatePasswordViaReset({
        username: user,
        password: values.password,
        resetPasswordToken: token,
      })
        .then(async (r) => {
          setloading({ done: false });
          setTimeout(() => {
            toast.success("Password Updated!");
            setloading({ done: true });
            history.push("/");
            actions.logout();
          }, 6000);
        })
        .catch((error) => {
          toast.error("Oh no!");
          if (error.response && error.response.status === 401)
            formik.setStatus(
              "Sorry, we couldn't update your password at this time."
            );
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
    },
  });

  return (
    <div class={styles.resetBox}>
      <div class={styles.loginSignupBox}>
        <h1>Reset Password</h1>
        <div style={{ alignSelf: "center" }}>
          <LockIcon />
        </div>
        {!loading.done ? (
          <div style={{ maxHeight: "400px" }}>
            <Loading />
          </div>
        ) : (
          <>
            <div style={{ alignSelf: "center" }}>User: {user && user}</div>
            <form onSubmit={formik.handleSubmit}>
              {formik.status && (
                <Fade bottom>
                  <div style={text}>
                    Error: {formik.status}. Please try again.
                  </div>
                </Fade>
              )}
              <label htmlFor="password">Password:</label>

              <input
                id="resetPassword"
                class="resetPassword"
                name="password"
                placeholder="Password (8 + Characters, 1 Lowercase, 1 Uppercase, 1 Number & 1 Special)"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              {formik.touched.password && formik.errors.password ? (
                <Fade bottom>
                  <div style={text}>{formik.errors.password}</div>
                </Fade>
              ) : null}

              <label htmlFor="confirmPassword">Confirm Password:</label>

              <input
                id="resetConfirmPassword"
                class="resetConfirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Retype Password "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />

              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <Fade bottom>
                  <div style={text}>{formik.errors.confirmPassword}</div>
                </Fade>
              ) : null}
              <div>
                <Button
                  variant="contained"
                  class={styles.loginSignupButtons}
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Reset Password
                </Button>
              </div>
              <div>
                <div>OR</div>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userLoggedIn.username,
  modalId: state.modalOpen.modal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setUsername: (username) => dispatch({ type: "login", payload: username }),
    openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
    closeModal: () => dispatch({ type: "closeModal" }),
    logout: () => dispatch({ type: "logout" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
