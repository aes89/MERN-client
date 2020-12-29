import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";

import appstyles from "../../app.module.css";
import ItemHandler from "./itemHandler";
import Logo from "../logo";
import useStyles from "../styles/makeStyles.js";

const Pantry = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>My Pantry Staples</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>This is pantry page</div>
          </Grid>
        </Grid>
        <ItemHandler />
      </Grid>
    </div>
  );
};

export default Pantry;
