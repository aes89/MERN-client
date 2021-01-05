import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import ingredients from "../../data/ingredients.json";
import pantry from "../../data/pantry.json";
import {
  addFridgeItem,
  addPantryItem,
  getFridge,
  setFridge,
} from "../../services/ingredientServices";

import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

function AutocompleteIngredients({
  actions,
  fridgeIngredients,
  type,
  username,
}) {
  console.log("fridge ingredients", fridgeIngredients);
  console.log("ingredients", ingredients);
  const filteredIngredients = fridgeIngredients
    ? ingredients.filter(
        (ingredient) => !fridgeIngredients.includes(ingredient.name)
      )
    : ingredients;

  let history = useHistory();
  const [selectedItem, setSelectedItem] = useState(null);
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState(null);

  //for fridge pantry difference - not working, only ingredients list
  if (type === "fridge") {
    const usedIngredients = ingredients;
  } else {
    const usedIngredients = pantry;
  }

  function handleAddFridge(event) {
    // event.preventDefault();
    const newValues = values.map((value) => value.name);

    console.log("get username and newVales", {
      username,
      newValues,
    });
    addFridgeItem(username, { item: newValues })
      .then((r) => {
        console.log("here", r);
        actions.addToFridge(r.fridgeIngredients);
        history.push("/ingredients/" + username + "/fridge");
        setValues([]);
      })
      .catch((error) => {
        console.log("errors");
        console.log(error.response);
        if (error.response && error.response.status === 401)
          setErrors("Error adding to your Fridge");
        else
          setErrors(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  }

  function handleAddPantry(event) {
    //   event.preventDefault()
    console.log(values);
    const newValues = values.map((i) => i.name);
    console.log(newValues.join(", "));
    addPantryItem(username, { item: newValues })
      .then((r) => {
        console.log(r);
        actions.addToPantry(r.pantryIngredients);
        history.push("/ingredients/" + username + "/pantry");
        setValues([]);
      })
      .catch((error) => {
        console.log("errors");
        console.log(error.response);
        if (error.response && error.response.status === 401)
          setErrors("Error adding to your pantry");
        else
          setErrors(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  }

  return (
    // autocomplete list
    <div style={{ width: 300, padding: 20 }}>
      {errors && <div>{errors}</div>}
      <Autocomplete
        multiple
        id="tags-standard"
        options={filteredIngredients}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions="true"
        onChange={(event, value) => setValues(value)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="standard"
              label="Add Ingredients"
              placeholder="Ingredients"
            />
          );
        }}
      />
      <Button
        variant="outlined"
        onClick={type === "fridge" ? handleAddFridge : handleAddPantry}
      >
        {" "}
        Add Ingredients
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.userLoggedIn.username,
  fridgeIngredients: state.userIngredients.fridgeIngredients,
  pantryIngredients: state.userIngredients.pantryIngredients,
  error: state.errorsMessages,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addToFridge: (newIngredients) =>
      dispatch({ type: "fridgeIngredients", payload: newIngredients }),
    addToPantry: (newIngredients) =>
      dispatch({ type: "pantryIngredients", payload: newIngredients }),
    changeError: (error) => dispatch({ type: "error", payload: error }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteIngredients);
