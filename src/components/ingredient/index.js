import React, { useState } from "react";
import styles from "./ingredient.module.css";
import useStyles from "../styles/makeStyles.js";

//MATERIAL
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

const Ingredient = ({ recipe, ingredients }) => {
  const classes = useStyles();
  
console.log("hit")
console.log(ingredients)

  const testIngredients = ["chicken","cheese", "olives"];


  return (
    <div>
      {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
      <Grid item sm spacing={1} wrap="wrap">
        <div class={styles.ingredient}>
          {ingredients.map((ingredient) => (
            <Paper className={classes.paperIngredient} variant="outlined">
              <div class={styles.ingredientText}>
                <p>{ingredient} </p>
                <ClearIcon />
              </div>
            </Paper>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default Ingredient;
