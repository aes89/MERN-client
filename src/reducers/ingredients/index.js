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
    })
    .addCase(pantryIngredients, (state, action) => {
      state.pantryIngredients = action.payload;
    })
    .addCase(deleteAllFridge, (state) => {
      state.fridgeIngredients = [];
    })
    .addCase(deleteAllPantry, (state) => {
      state.pantryIngredients = [];
    });
});

export default userIngredients;
