import React from "react";
import { connect } from "react-redux";

import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
import styles from "./single.module.css";

import ListedRecipe from "../listedRecipe";
//MATERIAL
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const SingleRecipe = ({ savedRecipes }) => {
  const classes = useStyles();

  //get saved receipes from local storage and assign to state first then use that state to display recipes

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>This is a Single Recipe</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
              <div className={styles.singleBox}>
                <Grid
                  container
                  spacing={1}
                  wrap="wrap"
                  alignItems="center"
                  justify="center"
                >
  
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedRecipes: state.recipes.savedRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: ({ email, username, profile }) =>
      dispatch({ type: "settings", payload: { email, username, profile } }),
    updateUsername: (username) =>
      dispatch({ type: "updateUsername", payload: username }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
