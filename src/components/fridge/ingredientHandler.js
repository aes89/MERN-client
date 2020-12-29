import React, { Fragment } from "react";
import AutocompleteIngredients from "../ingredientAutocomplete/index";
import ingredients from "../../data/ingredients.json";
import api from "../../config/api";

const IngredientHandler = () => {
  const submitFridge = async (values) => {
    try {
      //     db path
      await api.patch(`/:username/fridge/`, values);
    } catch (error) {
      console.log("preferences err err", JSON.parse(JSON.stringify(error)));
      // JSON.parse(JSON.stringify(error)).message;
    }
  };

  const deleteFridgeIngredient = (value) =>
    // <button onClick={() => handleDelete(value)}>X</button>
    // await api.delete("/:username/fridge")
    console.log("delete fridge ingredient", value);

  const emptyFridge = async () =>
    // await api.delete("/:username/fridge")
    console.log("emptying fridge");

  return (
    <Fragment>
      <AutocompleteIngredients
        handleDelete={deleteFridgeIngredient}
        path="fridge"
        handleSubmit={submitFridge}
        handleEmpty={emptyFridge}
        items={ingredients}
      />
    </Fragment>
  );
};

export default IngredientHandler;
