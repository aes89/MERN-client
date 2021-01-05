import React from "react";
import styles from "./logo.module.css";
import { Link } from 'react-router-dom'


const Logo = () => {
  return (

  
    <div class={styles.logo}>
        <Link to={`/`} >
      <div class={styles.text}>
      FridgeMate
      </div>
      </Link>
    </div>
    
    
  );
};


export default Logo
