import React from "react";
import { connect } from "react-redux";

import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
import styles from "./single.module.css";

import ListedRecipe from "../listedRecipe";
//MATERIAL
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TestBrowseData from "../../data/testBrowseRecipeData";

const SingleRecipe = ({ savedRecipes }) => {
  const classes = useStyles();


  let RecipeDataForSingleRecipe = TestBrowseData()
  console.log(RecipeDataForSingleRecipe)
  const {id, username, usedIngred, missedIngred, title, readyInMinutes, 
  servings, image, sourceUrl, cuisines, dishTypes, diets, instructions, 
  nutrition, summary, extendedIngredients} = RecipeDataForSingleRecipe[0] 
  //get saved receipes from local storage and assign to state first then use that state to display recipes

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>{title}</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
            <h2>You have {usedIngred}/{usedIngred + missedIngred} ingredients!</h2>
              <div class={styles.singleBox}>
                <Grid  container spacing={1}  wrap="wrap" alignItems="center" justify="center" >
                      <div class={styles.summaryBox}> 
                          <div class={styles.summaryText}>         
                              <p><strong>Serves:</strong> {servings} </p>
                              <p><strong>Calouries:</strong> {nutrition.caloricBreakdown} </p>
                              <p><strong>Cuisines:</strong> {cuisines.join(" , ")} </p>
                              <p><strong>Dish Types:</strong> {dishTypes.join(" , ")} </p>
                              <p><strong>Diets:</strong>  {diets.join(" , ")} </p>
                               <a href={sourceUrl} > <p class={styles.url}><strong>View Source URL</strong> </p></a> 
                          </div>  
                            <div class={styles.imageBox}> 
                              <img alt="picture of food" src={image} />      
                            </div>
                      </div>
                  <div class={styles.instructBox}> 
                       <h4>Ingredients</h4>
                       <p>{extendedIngredients} </p> 
                
                       <h4>Instructions</h4>
                      <div> {instructions} </div>  
                   </div>  
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedRecipes: state.recipes.savedRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: ({ email, username, profile }) =>
      dispatch({ type: "settings", payload: { email, username, profile } }),
    updateUsername: (username) =>
      dispatch({ type: "updateUsername", payload: username }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
