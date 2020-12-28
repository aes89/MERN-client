import React from "react";
import Logo from "../logo";
import appstyles from "../../app.module.css";

const Pantry = () => {
 
  return (
    <div class={appstyles.layout}>
            <Logo />
            <div class={appstyles.layoutContent}>
    This is pantry page
    </div>
    </div>
  );
};


export default Pantry
