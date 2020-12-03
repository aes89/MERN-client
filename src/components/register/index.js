import React from 'react';

import { useFormik } from 'formik';



const validate = values => {

  const errors = {};

  if (!values.firstName) {

    errors.firstName = 'Required';

  } else if (values.firstName.length > 15) {

    errors.firstName = 'Must be 15 characters or less';

  }



  if (!values.lastName) {

    errors.lastName = 'Required';

  } else if (values.lastName.length > 20) {

    errors.lastName = 'Must be 20 characters or less';

  }



  if (!values.email) {

    errors.email = 'Required';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

    errors.email = 'Invalid email address';

  }

  if (!values.password) {

    errors.password = 'Required';

  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {

    errors.password = 'Password must contain 8 characters, with 1 upper and lower case character, 1 number and 1 special character.';

  }

  if (!values.confirmPassword) {

    errors.confirmPassword = 'Required';

  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.confirmPassword)) {

    errors.confirmPassword = 'Password must contain 8 characters, with 1 upper and lower case character, 1 number and 1 special character.';

  } else if (values.password !== values.confirmPassword) {

    errors.confirmPassword = 'Passwords do not match.'
  }



  return errors;

};



const Register = () => {


  const formik = useFormik({

    initialValues: {

      firstName: '',

      lastName: '',

      email: '',

      password: '',

      confirmPassword: '',

    },

    validate,

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

    },

  });

  return (

    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="firstName">First Name</label>

      <input

        id="firstName"

        name="firstName"

        type="text"

        onChange={formik.handleChange}

        value={formik.values.firstName}

      />

      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>

      <input

        id="lastName"

        name="lastName"

        type="text"

        onChange={formik.handleChange}

        value={formik.values.lastName}

      />

      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>

      <input

        id="email"

        name="email"

        type="email"

        onChange={formik.handleChange}

        value={formik.values.email}

      />

      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>

        <input

            id="password"

            name="password"

            type="password"

            onChange={formik.handleChange}

            value={formik.values.password}

        />

        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <label htmlFor="confirmPassword">Password</label>

        <input

            id="confirmPassword"

            name="confirmPassword"

            type="password"

            onChange={formik.handleChange}

            value={formik.values.confirmPassword}

        />

        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

      <button type="submit">Submit</button>

    </form>

  );

};

export default Register