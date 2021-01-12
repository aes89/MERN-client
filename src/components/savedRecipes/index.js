import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
import styles from "./saved.module.css";

import { getAllUserSavedRecipes, getSavedRecipes, setSavedRecipes } from "../../services/recipeServices";

import ListedRecipe from "../listedRecipe";
import NoIngredients from "../noItemsPage";

import list from "../styles/imgs/list.png";
//MATERIAL
import Grid from "@material-ui/core/Grid";
import Fadein from '@material-ui/core/Fade';

import TestSaveData from "../../data/testSaveRecipeData";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedRecipes = ({ actions, savedRecipes }) => {
  const classes = useStyles();
  let history = useHistory(); 
  const [errors, setErrors] = useState(null);
  const [savedUserRecipes, setSavedUserRecipes] = useState([]);
  const checker = getSavedRecipes();
  console.log(checker);


  let TestData = TestSaveData()
  console.log(TestData)

    //Call DB to display recipe data
    async function getSavedHandler() {
              await getAllUserSavedRecipes()
                .then((r) => {
                  console.log("hit saved here")
                  console.log(r)
                  //saved to redux
                  actions.AddToSavedRecipes(r)
                  //save to local storage
                  setSavedRecipes(r)
                  setErrors("")
                  history.push("/recipes/saved-recipes")
                })
                .catch((error) => {
                  console.log("errors");
                  console.log(error);
                  if (error.response && error.response.status === 401)
                  toast.error("Error getting all your recipes");
                  else
                  toast.error( "There may be a problem with the server. Please try again after a few moments.");
                    history.push("/recipes/saved-recipes")
              });
        }

    useEffect(() => { 
      getSavedHandler()
      setSavedUserRecipes(JSON.parse(getSavedRecipes()))
    }, []);

  
    //function for removing from saved recipes- this is sent via props to listed recipe
    function removeSavedRecipeHandler () {




    }

  return (
    <div className={classes.root}>
     <Fadein in={true}  timeout={2000}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>Saved Recipes</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
              <div class={styles.possibleStatement}> </div>
              <div className={styles.savedBox}>
                <Grid
                  container
                  spacing={1}
                  wrap="wrap"
                  alignItems="center"
                  justify="center"
                >
                {checker ? (
                  <div>
                        {savedUserRecipes && savedUserRecipes.map((recipe) => (
                        <ListedRecipe key={recipe.id} recipe={recipe} savedType="saved recipes" removeSavedRecipe={removeSavedRecipeHandler}/>
                      ))} 
                    </div>
                    ) : (
                      <NoIngredients type="recipes" image={list} />
                  )}
                   
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
     </Fadein>
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
    AddToSavedRecipes: (recipes) =>
      dispatch({ type: "savedRecipes", payload: recipes }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes);
