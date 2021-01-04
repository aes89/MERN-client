import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Logo from "../logo";
import appstyles from "../../app.module.css";
import styles from "./browse.module.css";
import useStyles from "../styles/makeStyles.js";

import SearchRecipeButton from "../searchButton";
import ListedRecipe from "../listedRecipe";

import Loading from "../loading";

//MATERIAL
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import carrot from "../styles/imgs/carrot.png";

import TestBrowseData from "../../data/testBrowseRecipeData";
import {browseSearchRecipes,  getBrowsedRecipes, setBrowsedRecipes} from '../../services/recipeServices'

const BrowseRecipes = ({ browseRecipes, actions }) => {
  const classes = useStyles();

  const testrecipes = TestBrowseData();
   //const recipes =getBrowsedRecipes()
   const [loading, setloading] = useState({ done: false });
   const [recipes, setRecipes] = useState([]);

  //const recipes = getBrowsedRecipes()
    useEffect(() => {
          console.log("check")
          actions.updatedBrowseRecipes(getBrowsedRecipes())
          setRecipes(getBrowsedRecipes())
          console.log("check") 
          console.log(browseRecipes)
          console.log(getBrowsedRecipes())
          
      setTimeout(() => {
        setloading({ done: true })
        //setRecipes(getBrowsedRecipes())
         
        }, 5000);

 },[])
let data = getBrowsedRecipes()
let string =JSON.stringify(data)
let newData = JSON.parse(string)

console.log("ada", newData[0].id)
// const toCheck = []
//     data.map((recipe) => (
//           toCheck.push(recipe)     
//     ))
  console.log("check fgffg",  getBrowsedRecipes())


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
              {!loading.done ? (
                <Loading/>
                    ) : ( 
                      <div>
                      <div class={styles.possibleStatement}>
                        You can make 8 possible recipes!{" "}
                      </div>
                      <div className={styles.browseBox}>
                        <Grid container spacing={1} wrap="wrap" alignItems="center" justify="center" >
                          {/* {recipes === undefined ? (   <div> Error </div>  ) : (   
                            <div> {data} </div>
                            
                          )} */}
                          {testrecipes.map((recipe) => (
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
