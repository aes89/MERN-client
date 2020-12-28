import React from "react";
import Logo from "../logo";
import appstyles from "../../app.module.css";

const SavedRecipes = () => {
 
  return (
      <div class={appstyles.layout}>
          <Logo />
        <div class={appstyles.layoutContent}>
          This is saved Recipe page
          </div>
      </div>
  );
};


export default SavedRecipes
