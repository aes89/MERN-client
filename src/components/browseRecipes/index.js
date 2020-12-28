import React from "react";
import Logo from "../logo";
import appstyles from "../../app.module.css";

const BrowseRecipes = () => {
 
  return (
    <div class={appstyles.layout}>
        <Logo />
      <div class={appstyles.layoutContent}>
        This is browse Recipe page
        </div>
    </div>
  );
};


export default BrowseRecipes
