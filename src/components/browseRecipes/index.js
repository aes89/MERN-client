import React from "react";
import { connect } from "react-redux";


import Logo from "../logo";
import appstyles from "../../app.module.css";
import styles from "./browse.module.css";
import useStyles from "../styles/makeStyles.js";

import SearchRecipeButton from "../searchButton";
import ListedRecipe from "../listedRecipe.js";

//MATERIAL
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import carrot from "../styles/imgs/carrot.png";

import TestBrowseData from "../../data/testBrowseRecipeData"

const BrowseRecipes = ({browseRecipes}) => {
  const classes = useStyles();

const recipes = TestBrowseData()
   
  return  (
    <div className={classes.root}>
       <Grid container spacing={0}>
               <Grid container item xs={12} spacing={0}>
                <Logo />
                <Grid item xs={12} spacing={2}>
                <h1 class={appstyles.headings}>Browse Recipes</h1>
                <div className={styles.searchButtonMove}>
                <SearchRecipeButton  />
                </div>
                </Grid>  
                 <Grid item xs={12} spacing={2} >
                    <div class={appstyles.layoutContent}>
                    <div class={styles.possibleStatement}>You can make 8 possible recipes! </div>
                    <div className={styles.browseBox}>
                        <Grid container spacing={1} wrap="wrap" alignItems="center" justify="center">
                          {recipes.map((recipe) => <ListedRecipe key={recipe.id} recipe={recipe} />)}           
                         </Grid> 
                      </div>
                    </div>
                </Grid>   
              </Grid>
        </Grid>
    </div>)
};

const mapStateToProps = (state) => ({
 
  browseRecipes: state.recipes.browseRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: ({email, username, profile}) =>
      dispatch({ type: "settings", payload: {email, username, profile}}),
    updateUsername: (username ) =>
      dispatch({ type: "updateUsername", payload: username}),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseRecipes);

