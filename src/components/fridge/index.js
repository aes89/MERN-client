import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import styles from "../styles/loginSignup.module.css";
import AddIngredient from "./addIngredient";

const Fridge = () => {
  return (
    <div>
      It's a fridge!
      <AddIngredient />
    </div>
  );
};

export default Fridge;

// import React from 'react'
// import BlogPost from "./BlogPost"

// const BlogPosts = ({postData}) => {
//     return (
//         <div>
//             {postData.sort((a,b) => b.modified_date - a.modified_date).map((post) => <BlogPost key={post._id} post={post} />)}
//         </div>
//     )
// }

// export default BlogPosts
