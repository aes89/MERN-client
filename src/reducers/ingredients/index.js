import { createAction, createReducer } from "@reduxjs/toolkit";

const fridgeIngredients = createAction("fridgeIngredients");
const pantryIngredients = createAction("pantryIngredients");

const initialState = { fridgeIngredients: [], pantryIngredients: [] };

const userIngredients = createReducer(initialState, (builder) => {
  builder
    .addCase(fridgeIngredients, (state, action) => {
      state.fridgeIngredients = action.payload.fridgeIngredients;
      console.log("state updated for fridgeIngredients!");
      //console.log(action.payload.fridgeIngredients)
    })
    .addCase(pantryIngredients, (state, action) => {
      state.pantryIngredients = action.payload.pantryIngredients;
      console.log("state updated for pantryIngredients!");
    //  console.log(action.payload.pantryIngredients)
    })
});

export default userIngredients;
