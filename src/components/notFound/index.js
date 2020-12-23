import React from "react";
import styles from "../../app.module.css";

const notFoundPage = () => {

  return (
    <div class={styles.layout}>
      <div class={styles.layoutContent}>
        <h1>Oops!</h1>
        <p>We can't seem to find the page your looking for.</p>
        </div>
    </div>
  );
};


export default notFoundPage
