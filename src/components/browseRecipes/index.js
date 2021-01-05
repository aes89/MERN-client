import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import Logo from "../logo";
import appstyles from "../../app.module.css";
import styles from "./browse.module.css";
import useStyles from "../styles/makeStyles.js";

import SearchRecipeButton from "../searchButton";
import ListedRecipe from "../listedRecipe";

import Loading from "../loading";

//MATERIAL

import Grid from "@material-ui/core/Grid";


import TestBrowseData from "../../data/testBrowseRecipeData";
import {browseSearchRecipes,  getBrowsedRecipes, setBrowsedRecipes} from '../../services/recipeServices'

const BrowseRecipes = ({ browseRecipes, actions }) => {
  const classes = useStyles();

  const testrecipes = TestBrowseData();
   //const recipes =getBrowsedRecipes()
   const [loading, setloading] = useState({ done: false });
   const [recipesState, setRecipesState] = useState(null);
   const r = React.useRef(null)
  //const recipes = getBrowsedRecipes()
    useEffect(() => {
          let recipeLocal = getBrowsedRecipes()
          setRecipesState(recipeLocal)
          actions.updatedBrowseRecipes(recipeLocal)
          r.current = recipeLocal
          const recipesDisplay = recipeLocal
         
           console.log("test r", r)
          setTimeout(() => {
            setloading({ done: true })
            console.log("check loading done") 
            //setRecipes(getBrowsedRecipes())
              
            }, 5000);
   },[])

  console.log("check") 
  console.log("local store", getBrowsedRecipes())
  console.log("useState updated", recipesState)
  console.log("redux  updated", browseRecipes)
  ///let display = JSON.stringify(browseRecipes.recipes[0].title)

let check = getBrowsedRecipes()
  if (check < 0) {
  console.log("check ffff", check[0].title);
}

if (!loading.done ) return <Loading/>

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
              {/* {!loading.done ? (
                <Loading/>
                    ) : (  */}
                      <div>
                      <div class={styles.possibleStatement}>
                        You can make 8 possible recipes!{" "}
                      </div>
                      <div className={styles.browseBox}>
                        <Grid container spacing={1} wrap="wrap" alignItems="center" justify="center" >
                        
                          
                            
        
{/*                 
                     {recipesDisplay.map((recipe) => (
                          
                            <ListedRecipe key={recipe.id} recipe={recipe} />
                           
                          ))}     */}

                        
                     
                        </Grid>
                      </div>
                    </div>
                  {/* )} */}
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
