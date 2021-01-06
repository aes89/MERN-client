import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import styles from "./browse.module.css";
import useStyles from "../styles/makeStyles.js";

import SearchRecipeButton from "../searchButton";
import ListedRecipe from "../listedRecipe";

import Loading from "../loading";
import Button from "@material-ui/core/Button";

//MATERIAL

import Grid from "@material-ui/core/Grid";


import TestBrowseData from "../../data/testBrowseRecipeData";
import {browseSearchRecipes,  getBrowsedRecipes, setBrowsedRecipes} from '../../services/recipeServices'
import {getFridge, setFridge } from '../../services/ingredientServices'
import {getUsername} from '../../services/authServices'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BrowseRecipes = ({ browseRecipes, actions }) => {
  const classes = useStyles();
 let history = useHistory();

  const testrecipes = TestBrowseData();
   const [loading, setloading] = useState(false);
   const [recipesState, setRecipesState] = useState(null);
   const [errors, setErrors] = useState(null);


  //This checks if the fridge is empty or not, whether the DB route gets called again
  function handleNewIngredientsAdded () {
    let fridgeChecker = getFridge()
        if (fridgeChecker === []) {
          setBrowsedRecipes() //local storage
        history.push("/recipes/browse")
        } else {   
      }   
  }

  useEffect(() => {
    handleNewIngredientsAdded()

   if (getBrowsedRecipes() === null) {
       browseSearchRecipes()
            .then((recipes) => {
                    //console.log(JSON.stringify(recipes[0].id))
                      console.log("hit here testing")
                      setRecipesState(recipes) //state 
                      setBrowsedRecipes(recipes) //local storage
                      actions.updatedBrowseRecipes(recipes)  //redux
                      console.log("gfdfdf", recipes)
                      toast.success("Here are your recipes!")
               }).then (
                  setTimeout(() => {
                  setloading(true)
                  console.log("check loading done") 
                  //setRecipes(getBrowsedRecipes()
                  //  toast.success("Here are your recipes!")
                  }, 5000)
                
               )
              .catch((error) => {
                  console.log("errors")
                  console.log(error)
                if (error.response && error.response.status === 401)
                  setErrors(" failed. ")
                  else   
                  setErrors("There may be a problem with the server. Please try again after a few moments.")
                     
                  });
        } else {

         setRecipesState(JSON.parse(getBrowsedRecipes()))
         actions.updatedBrowseRecipes(JSON.parse(getBrowsedRecipes())) 

         setTimeout(() => {
              setloading(true)
              console.log("check loading done") 
              //setRecipes(getBrowsedRecipes()
                  }, 5000)
         }
       
   },[])

//if search again button is clicked, clear local storage and call the route again so the search initalizes again
  function handleSearchAgain () {
       setBrowsedRecipes() //local storage
      //  setRecipesState(recipes) //state 
     history.push("/recipes/browse")
      //  actions.updatedBrowseRecipes(recipes) 
  }

  console.log("check") 
  console.log("local store", getBrowsedRecipes())
  console.log("useState updated", recipesState)
  console.log("redux  updated", browseRecipes)
  ///let display = JSON.stringify(browseRecipes.recipes[0].title)
  const fridgeChecker = getFridge()
  const randomRecipe = "You have no ingredients in your fridge or pantry, so here are some recipe ideas!"


  return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <Logo />
            <Grid item xs={12} spacing={2}>
              <h1 class={appstyles.headings}>Browse Recipes</h1>
              <div className={styles.searchButtonMove}>
                <SearchRecipeButton />
              </div>
            </Grid>
            <Grid item xs={12} spacing={2}>
              <div class={appstyles.layoutContent}>
               {loading === false ? (
                <Loading/>
                    ) : (  
                      <div>
                      <div class={styles.newSearchButton}>
                          <Button variant="contained" onClick={handleSearchAgain}> Search again!</Button>
                          </div>
                      {fridgeChecker ? (
                          <div class={styles.possibleStatement}>
                            You can make {recipesState.length} possible recipes!  
                          </div> ) : ( 
                           <div class={styles.possibleStatement}>
                           {randomRecipe} 
                            </div>
                          )}
                      
                          <div className={styles.browseBox}>
                          <Grid container spacing={1} wrap="wrap" alignItems="center" justify="center" >
                          {browseRecipes && browseRecipes.map((recipe) => (
                                
                                  <ListedRecipe key={recipe.id} recipe={recipe} />
                                
                                ))}     

                              
                          
                              </Grid>
                            </div>
                    </div>
                 )} 
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  
};

const mapStateToProps = (state) => ({
  browseRecipes: state.recipes.browseRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: ({ email, username, profile }) =>
      dispatch({ type: "settings", payload: { email, username, profile } }),
    updateUsername: (username) =>
      dispatch({ type: "updateUsername", payload: username }),
    updatedBrowseRecipes: (recipes) =>
      dispatch({ type: "browseRecipes", payload: recipes }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseRecipes);
