import React from 'react';

import { useFormik } from 'formik';



const validate = values => {

  const errors = {};

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
    <div>
    <h1>Register:</h1>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email Address</label>

      <input

id="registerEmail"

name="email"

type="email"

onChange={formik.handleChange}

onBlur={formik.handleBlur}

value={formik.values.email}

/>

      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>

        <input

id="registerPassword"

name="password"

type="password"

onChange={formik.handleChange}

onBlur={formik.handleBlur}

value={formik.values.password}

/>

        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <label htmlFor="confirmPassword">Password</label>

        <input

id="registerConfirmPassword"

name="confirmPassword"

type="password"

onChange={formik.handleChange}

onBlur={formik.handleBlur}

value={formik.values.confirmPassword}

/>

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

      <button type="submit">Sign Up</button>

    </form>
</div>
  );


};

export default Register;






