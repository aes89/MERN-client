import { createAction, createReducer } from "@reduxjs/toolkit";

const fridgeIngredients = createAction("fridgeIngredients");
const pantryIngredients = createAction("pantryIngredients");
const deleteAllFridge = createAction("deleteAllFridge");
const deleteAllPantry = createAction("deleteAllPantry");

const initialState = { fridgeIngredients: [], pantryIngredients: [] };

const userIngredients = createReducer(initialState, (builder) => {
  builder     
    .addCase(fridgeIngredients, (state, action) => {
      state.fridgeIngredients = action.payload;
      console.log("state updated for fridgeIngredients!");
      console.log(action.payload)
    })
    .addCase(pantryIngredients, (state, action) => {
      state.pantryIngredients = action.payload;
      console.log("state updated for pantryIngredients!");
      console.log(action.payload)
    })
    .addCase(deleteAllFridge, (state) => {
      state.fridgeIngredients = [];
      console.log("cleared all fridge");
    })
    .addCase(deleteAllPantry, (state) => {
      state.pantryIngredients = [];
      console.log("cleared all pantry");
    })
});

export default userIngredients;
