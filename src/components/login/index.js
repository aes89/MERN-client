import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

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

const Login = ({ actions, loggedIn }) => {
  console.log("are we logged in", loggedIn);

  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Log In:</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>

        <input
          id="loginEmail"
          name="email"
          type="email"
          class="loginEmail"
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <button type="submit" onClick={actions.logIn}>
          Log In
        </button>
        <button onClick={actions.logout}>log out</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logIn: () => dispatch({ type: "login" }),
    logout: () => dispatch({ type: "logout" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
