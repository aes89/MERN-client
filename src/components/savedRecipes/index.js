import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
import styles from "./saved.module.css";

import { getAllUserSavedRecipes, getSavedRecipes, setSavedRecipes, removedSavedRecipe } from "../../services/recipeServices";

import ListedRecipe from "../listedRecipe";
import NoIngredients from "../noItemsPage";
import Loading from "../loading";

import list from "../styles/imgs/list.png";
//MATERIAL
import Grid from "@material-ui/core/Grid";
import Fadein from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";

import TestSaveData from "../../data/testSaveRecipeData";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedRecipes = ({ actions, savedRecipes }) => {
  const classes = useStyles();
  let history = useHistory(); 
  const [errors, setErrors] = useState(null);
  const [savedUserRecipes, setSavedUserRecipes] = useState([]);
  const [loading, setloading] = useState({ done: false });


  const checker = getSavedRecipes();
  //console.log(checker);


  let TestData = TestSaveData()
  //console.log(TestData)

  //Call DB to display recipe data
  async function getSavedHandler() {
     setloading({ done: false });
              await getAllUserSavedRecipes()
                .then((res) => {
                  setSavedRecipes()
                  console.log("hit saved here")
                  console.log(res)
                  //saved to redux
                  actions.AddToSavedRecipes(res)
                  //save to local storage
                  setSavedRecipes(res)
                  setSavedUserRecipes(res)
                  setErrors("")
                  setTimeout(() => {
                  setloading({ done: true });
                  console.log("check loading done");
                }, 2500);
                  history.push("/recipes/saved-recipes")
                })
                .catch((error) => {
                  //console.log("errors");
                  //console.log(error);
                  if (error.response && error.response.status === 401)
                  toast.error("Sorry we could not get your recipes at this time.");
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
    function removeSavedRecipeHandler (id) {
      setloading({ done: false });
      removedSavedRecipe(id).then((res) => { 
         console.log(res)
        //setSavedRecipes()
        setTimeout(() => {
          setloading({ done: true });
          //console.log("check loading done");
        }, 3000);
        toast.success("Removed from Saved Recipes");
        history.push("/recipes/saved-recipes")
      }).then(async (item) => {
         await getSavedHandler()
         setSavedUserRecipes(JSON.parse(getSavedRecipes()))
        }).catch((error) => {
        //console.log("errors")
        //console.log(error.response)
        if (error.response && error.response.status === 401){
           //setErrors("Sorry we could not submit your request at this time.")
           toast.error("Sorry we could not submit your request at this time.")
          } else{
           //setErrors("There may be a problem with the server. Please try again after a few moments.")
          toast.error("There may be a problem with the server. Please try again after a few moments.");}
      });


    }

  return (
    <div className={classes.root}>
     <Fadein in={true}  timeout={2000}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>Your Saved Recipes</h1>
            <div class={styles.searchButtonMove}>
            <Link to={"/recipes/browse"}>
                <Button class={styles.newSearch} >Back to Search </Button>
            </Link>
            </div>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
                {errors && <div>Error: {errors}</div>}
                 {!loading.done ? (
                <Loading />
              ) : (
                <>
                  <div class={styles.possibleStatement}> </div>
                      <div class={appstyles.subheading} style={{textAlign: "center",fontSize: "1.2em"}}>Your recipes saved from FridgeMate!</div>
                         
                        <div className={styles.savedBox}>
                          <Grid container spacing={1}  alignItems="center" justify="center" >
                          {checker ? (
                              <>
                                  {savedUserRecipes && savedUserRecipes.map((recipe) => (
                                  <ListedRecipe key={recipe.title} recipe={recipe} savedType="saved recipes" removeSavedRecipe={removeSavedRecipeHandler}/>
                                ))} 
                              </>
                              ) : (
                                <NoIngredients type="recipes" image={list} />
                            )}
                          </Grid>
                        </div>
                  </>
              )}
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
