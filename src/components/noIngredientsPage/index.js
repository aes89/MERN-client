import React, { useState, useEffect } from "react";
import styles from "./noIngredients.module.css"
import useStyles from "../styles/makeStyles.js";



//IMAGES-icons
import fridge from "../styles/imgs/fridge.png";
import pantry from "../styles/imgs/pantry.png";



//MATERIAL
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

const NoIngredients = ({ image, type }) => {
  const classes = useStyles();


  return (
    <div>
      <Grid item sm spacing={1} wrap="wrap">
      <div class={styles.noBox}>
       <div class={styles.imgBox}>
                  <img alt="Picture of cartoon kitchen" src={image} />
        </div>
        <p>Looks like you have no {type} items! </p> 
        <p>Would you like to enter some?</p>
        </div>
      </Grid>
    </div>
  );
};

export default NoIngredients;
