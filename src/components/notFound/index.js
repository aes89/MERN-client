import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";
import appstyles from "../../app.module.css";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Logo from "../logo";

import useStyles from "../styles/makeStyles.js";

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>Not Found</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
              <div class={styles.notFoundBox}>
                <div class={styles.orangeBox}>404</div>
                <div class={styles.textBox}>
                  <h1>Oops!</h1>
                  <p>We can't seem to find the page your looking for.</p>
                  <Link to={`/`}>
                    <Button class={styles.homeButton}>Go to Home</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFoundPage;
