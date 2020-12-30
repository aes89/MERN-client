import React, { useState } from "react";
import styles from "./noIngredients.module.css"
import useStyles from "../styles/makeStyles.js";

//MATERIAL
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

const NoIngredients = ({ type }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid item sm spacing={1} wrap="wrap">
      <div class={styles.noBox}>
        There are no ingredients here.
        </div>
      </Grid>
    </div>
  );
};

export default NoIngredients;
