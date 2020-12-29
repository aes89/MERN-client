import React from "react";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
//MATERIAL

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const Pantry = () => {
  const classes = useStyles();
  return  (
  <div className={classes.root}>
     <Grid container spacing={0}>
             <Grid container item xs={12} spacing={0}>
              <Logo />
              <Grid item xs={12} spacing={2}>
              <h1 class={appstyles.headings}>My Pantry Staples</h1>
              </Grid>  
              <Grid item xs={12} spacing={2}>
                  <div class={appstyles.layoutContent}>
                  This is pantry page
               
                </div>
              </Grid>   
            </Grid>
      </Grid>
  </div>)


  
};


export default Pantry
