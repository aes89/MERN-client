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

  } 
  // not on log in??
  // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {

  //   errors.password = 'Invalid password';

  // }


  return errors;

};



const Login = () => {


  const formik = useFormik({
      
    initialValues: {
        
        email: '',
        
        password: '',

        
    },
    
    validate,
    
    onSubmit: values => {
        
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

onChange={formik.handleChange}

onBlur={formik.handleBlur}

value={formik.values.email}

/>

      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>

        <input

id="loginPassword"

name="password"

type="password"

onChange={formik.handleChange}

onBlur={formik.handleBlur}

value={formik.values.password}

/>

        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <button type="submit">Log In</button>

    </form>
</div>
  );


};

export default Login;






