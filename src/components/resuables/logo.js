import React from "react";
import styles from "../styles/logo.module.css";
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <Link to={`/`} >
    <div class={styles.logo}>
      FridgeMate
    </div>
    </Link>
  );
};


export default Logo
