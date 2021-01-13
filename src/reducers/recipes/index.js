import { createAction, createReducer } from "@reduxjs/toolkit";

const browseRecipes = createAction("browseRecipes");    
const savedRecipes = createAction("savedRecipes");
const singleRecipe = createAction("singleRecipe");

const initialState = { browseRecipes: null, savedRecipes: null, singleRecipe: null };

const recipes = createReducer(initialState, (builder) => {
  builder
    .addCase(browseRecipes, (state, action) => {
      state.browseRecipes = action.payload;
      console.log("state updated for browse Recipes!");
      //console.log(action.payload)
    })
    .addCase(savedRecipes, (state, action) => {
      state.savedRecipes = action.payload 
     // state.savedRecipes = [action.payload ,...state.savedRecipes]
      console.log("state updated for saved Recipes!");
      //console.log(state.savedRecipes)
    })
    .addCase(singleRecipe, (state, action) => {
      state.singleRecipe = action.payload;
      console.log("state updated for single Recipe!");
     //console.log(action.payload)
    })
    
});

export default recipes;
