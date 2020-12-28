import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import appstyles from "../../app.module.css";
import AutocompleteIngredients from "../ingredientAutocomplete";
import Logo from "../logo";

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Fridge = () => {
  const classes = useStyles();
  return  (
  <div className={classes.root}>
     <Grid container spacing={0}>
             <Grid container item xs={12} spacing={0}>
              <Logo />
              <Grid item xs={12} spacing={2}>
              <h1 class={appstyles.headings}>My Fridge</h1>
              </Grid>  
              <Grid item xs={12} spacing={2}>
                  <div class={appstyles.layoutContent}>
                    It's a fridge!
                    <AutocompleteIngredients />
                </div>
              </Grid>   
            </Grid>
      </Grid>
  </div>)
  {/* <div class={appstyles.layout}>
            <Logo />
            <div class={appstyles.layoutContent}>
            It's a fridge!
            <AutocompleteIngredients />
            </div>
        </div> */}
};

export default Fridge;
