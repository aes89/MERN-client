import React from "react";
import styles from "./footer.module.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Container from "@material-ui/core/Container";


const Footer = () => (
  <div class={styles.footerBox}>
    <div>
     
      <CopyrightIcon fontSize="small" />
      Adrienne Smith & Shelby El-rassi 2020
    </div>
  </div>
);

export default Footer;
