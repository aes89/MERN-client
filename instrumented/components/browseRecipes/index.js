import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import styles from "./browse.module.css";
import useStyles from "../styles/makeStyles.js";


import ListedRecipe from "../listedRecipe";
import Loading from "../loading";

import Fadein from '@material-ui/core/Fade';

//MATERIAL
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


import {browseSearchRecipes,  getBrowsedRecipes, setBrowsedRecipes, addNewSavedRecipe} from '../../services/recipeServices'
import {getFridge } from '../../services/ingredientServices'

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BrowseRecipes = ({ browseRecipes, actions }) => {
  const classes = useStyles();
  let history = useHistory();


   const [loading, setloading] = useState(false);
   const [recipesState, setRecipesState] = useState(null);
   const [errors, setErrors] = useState(null);


  //This checks if the fridge is empty or not, whether the DB route gets called again
  function handleNewIngredientsAdded () {
    let fridgeChecker = getFridge()
        if (fridgeChecker === []) {
          setBrowsedRecipes() //local storage
          console.log(getBrowsedRecipes() )
          //recipeSearchHandler()
          history.push("/recipes/browse")
        } else {   
      }   
  }

  function recipeSearchHandler (){
   handleNewIngredientsAdded()
   if (!getBrowsedRecipes()) {
       browseSearchRecipes()
            .then((recipes) => {   
                      setRecipesState(recipes) //state 
                      setBrowsedRecipes(recipes) //local storage
                      actions.updatedBrowseRecipes(recipes)  //redux
                      console.log("gfdfdf", recipes)
                      toast.success("Here are your recipes!")
               }).then (
                  setTimeout(() => {
                  setloading(true)
                  console.log("check loading done") 
                  }, 5000)
                
               )
              .catch((error) => {
                  console.log("errors")
                  console.log(error)
                  if (error.response && error.response.status === 401)
                  setErrors(" Recipe search failed. Try again. ")
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

  }

  useEffect(() => {
    //handleNewIngredientsAdded()
    recipeSearchHandler()
   
       
   },[])

//if search again button is clicked, clear local storage and call the route again so the search initalizes again
  function handleSearchAgain () {
      history.push("/recipes/browse")
       setloading(false)
       setBrowsedRecipes() //local storage
      //  setRecipesState(recipes) //state 
      recipeSearchHandler()
      history.push("/recipes/browse")
      //  actions.updatedBrowseRecipes(recipes) 
  }


//Write savedRecipe Handler
 function saveRecipeHandler(newRecipe) {
        addNewSavedRecipe(newRecipe)
          .then((r) => {
            //saved to redux
            //save to local storage
            toast.success(" You have saved this recipe!");
          })
          .catch((error) => {
            console.log("errors");
            console.log(error.response);
            toast.error("Oh no error!");
            if (error.response && error.response.status === 401)
              setErrors("Error Saving Recipe");
            else
              setErrors(
                "There may be a problem with the server. Please try again after a few moments."
              );
        });
  }




  console.log("check") 
  console.log("local store", getBrowsedRecipes())
  console.log("useState updated", recipesState)
  console.log("redux  updated", browseRecipes)


  const fridgeChecker = getFridge()
  const randomRecipe = "You have no ingredients in your fridge, so here are some recipe ideas!"


  return (
      <div className={classes.root}>
       <Fadein in={true}  timeout={2000}>
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <Logo />
            <Grid item xs={12} spacing={2}>
              <h1 class={appstyles.headings}>Browse Recipes</h1>
              <div class={styles.searchButtonMove}>
                <Button class={styles.newSearch} onClick={handleSearchAgain}> Search again!</Button>
              </div>
            </Grid>
            <Grid item xs={12} spacing={2}>
              <div class={appstyles.layoutContent}>
                 {errors && <div>Error: {errors}</div>}
               {loading === false ? (
                <Loading/>
                    ) : (  
                      <div>
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
                                
                                  <ListedRecipe key={recipe.id} recipe={recipe} saveRecipe={saveRecipeHandler} />
                                
                                   ))}     

                              
                          
                              </Grid>
                            </div>
                    </div>
                 )} 
              </div>
            </Grid>
          </Grid>
        </Grid>
        </Fadein>
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
