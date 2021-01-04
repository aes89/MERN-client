import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./ingredient.module.css";
import useStyles from "../styles/makeStyles.js";

import {
  deleteFridgeItem,
  deletePantryItem,
  getAllFridgeIngredients,
  getFridge,
  setFridge,
  getPantry,
  setPantry,
} from "../../services/ingredientServices";
import { getUsername } from "../../services/authServices";

//MATERIAL
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

const Ingredient = ({
  actions,
  recipe,
  ingredients,
  deleteIngredient,
  fridgeIngredients,
  pantryIngredients,
}) => {
  const classes = useStyles();
  let history = useHistory();

  const [errors, setErrors] = useState(null);

  console.log("hit");
  console.log("check ing" + ingredients);

  //const testIngredients = ["chicken","cheese", "olives"];

  const handleDeleteFromFridge = async (event) => {
    console.log("deleted 1 Item fridge");
    //let newArrayy =  filterIng(fridgeIngredients, event.currentTarget.value)
    // console.log(newArrayy)
    deleteFridgeItem(getUsername(), { item: event.currentTarget.value })
      .then((r) => {
        console.log("stupid thing in r", r);
        //setFridge(newArrayy)
        //actions.deleteItemFromFridge(getFridge)
        history.push("/ingredients/" + getUsername() + "/fridge");
      })
      .then(async (item) => {
        const getFridgeIngredients = await getAllFridgeIngredients(
          getUsername()
        );
        const { fridgeIngredients } = getFridgeIngredients;
        actions.updateFridgeIngredients(fridgeIngredients);
      })
      .catch((error) => {
        //console.log("errors")
        //console.log(error.response)
        if (error.response && error.response.status === 401)
          setErrors("Error deleting fridge ingredient");
        else
          setErrors(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  };

  const handleDeleteFromPantry = async (event) => {
    console.log("deleted 1 Item pantry");

    deletePantryItem(getUsername(), { item: event.currentTarget.value })
      .then((r) => {
        console.log(r);
        //let newArrayy = filterIng(pantryIngredients, event.currentTarget.value)
        //setPantry(newArrayy)
        //actions.deleteItemFromPantry(getPantry)
        history.push("/ingredients/" + getUsername() + "/pantry");
      })
      .catch((error) => {
        //console.log("errors")
        //console.log(error.response)
        if (error.response && error.response.status === 401)
          setErrors("Error deleting pantry ingredient");
        else
          setErrors(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  };

  return (
    <div>
      {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
      <Grid item sm spacing={1} wrap="wrap">
        <div class={styles.ingredient}>
          {ingredients.map((ingredient) => (
            <Paper className={classes.paperIngredient} variant="outlined">
              <div class={styles.ingredientText}>
                <p>{ingredient} </p>
                <Button
                  value={ingredient}
                  onClick={
                    ingredients === fridgeIngredients
                      ? handleDeleteFromFridge
                      : handleDeleteFromPantry
                  }
                >
                  <ClearIcon />
                </Button>
              </div>
            </Paper>
          ))}
        </div>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fridgeIngredients: state.userIngredients.fridgeIngredients,
  pantryIngredients: state.userIngredients.pantryIngredients,
  error: state.errorsMessages,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateFridgeIngredients: (ingredients) =>
      dispatch({ type: "fridgeIngredients", payload: ingredients }),
    deleteItemFromFridge: (deleteIngredient) =>
      dispatch({ type: "fridgeIngredients", payload: deleteIngredient }),
    deleteItemFromPantry: (deleteIngredient) =>
      dispatch({ type: "pantryIngredients", payload: deleteIngredient }),
    changeError: (error) => dispatch({ type: "error", payload: error }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
