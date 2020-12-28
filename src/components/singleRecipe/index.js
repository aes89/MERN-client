import React from "react";
import appstyles from "../../app.module.css";
import Logo from "../logo";

const SingleRecipe = () => {
 
  return (
    <div class={appstyles.layout}>
        <Logo />
      <div class={appstyles.layoutContent}>
        This is saved Recipe page
        </div>
    </div>
  );
};


export default SingleRecipe
