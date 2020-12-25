import React from "react";
import styles from "./footer.module.css";
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer = () => {
 
  return (
    <div class={styles.footerBox}>
  <div> <CopyrightIcon/>Adrienne Smith & Shelby El-rassi 2020</div>
    </div>
  );
};


export default Footer
