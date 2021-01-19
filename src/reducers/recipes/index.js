import { createAction, createReducer } from "@reduxjs/toolkit";

const browseRecipes = createAction("browseRecipes");
const savedRecipes = createAction("savedRecipes");
const singleRecipe = createAction("singleRecipe");

const initialState = {
  browseRecipes: null,
  savedRecipes: null,
  singleRecipe: null,
};

const recipes = createReducer(initialState, (builder) => {
  builder
    .addCase(browseRecipes, (state, action) => {
      state.browseRecipes = action.payload;
    })
    .addCase(savedRecipes, (state, action) => {
      state.savedRecipes = action.payload;
    })
    .addCase(singleRecipe, (state, action) => {
      state.singleRecipe = action.payload;
    });
});

export default recipes;
