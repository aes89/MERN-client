import React from "react";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";


import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




const BrowseRecipes = () => {
  const classes = useStyles();
  return  (
    <div className={classes.root}>
       <Grid container spacing={0}>
               <Grid container item xs={12} spacing={0}>
                <Logo />
                <Grid item xs={12} spacing={2}>
                <h1 class={appstyles.headings}>Browse Recipes</h1>
                </Grid>  
                <Grid item xs={12} spacing={2}>
                    <div class={appstyles.layoutContent}>
                    This is browse recipe page
                 
                  </div>
                </Grid>   
              </Grid>
        </Grid>
    </div>)
};


export default BrowseRecipes
