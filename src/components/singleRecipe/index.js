import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Logo from "../logo";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";
import styles from "./single.module.css";

import Loading from "../loading";
import {getSingleRecipePage, getSingleRecipe, setSingleRecipe} from '../../services/recipeServices'

//MATERIAL
import Grid from "@material-ui/core/Grid";
import Fadein from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

//import TestBrowseData from "../../data/testBrowseRecipeData";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SingleRecipe = ({ actions, savedRecipes, singleRecipe }) => {
  const classes = useStyles();
  const { id } = useParams();

  const [displayRecipe, setDisplayRecipe] = useState("");

  const [loading, setloading] = useState({ done: false });

  const {cuisines, diets, dishTypes, image, instructions, readyInMinutes, recipeID, servings, 
  sourceUrl, title, _id, extendedIngredients, username, vegetarian, vegan, glutenFree, dairyFree, veryHealthy, cheap, 
  veryPopular, sustainable} = displayRecipe 

  function ingredientFilter (extendedIngredients){
    const array = []
    extendedIngredients.map((ingredient) => {
      array.push(ingredient.name)}) 
    const filteredExtendedIngredients = [...new Set(array)];
    return filteredExtendedIngredients
   }

  //get saved receipes from local storage and assign to state first then use that state to display recipes
  //console.log('check username', username)
    function checkSingleRecipeLocal () {
      let checker =  JSON.parse(localStorage.getItem("singleRecipe"))
   
      if (checker.id){
        checker.id = checker.id.toString()
        const exists = Object.values(checker).some(function(k) { 
        return k === id })
        //console.log("check exists", exists)
        return exists
      } else if (checker.recipeID) {
        checker.recipeID = checker.recipeID.toString()
        const exists = Object.values(checker).some(function(k) { 
        return k === id })
        //console.log("check exists", exists)
        return exists
      }
  }

  useEffect(() => {
    //if already in local storage, grab from local instead of DB
      let checkLocal = checkSingleRecipeLocal ()
      if (checkLocal ) {
          console.log("already in local")
          let currentSingleRecipe = JSON.parse(localStorage.getItem("singleRecipe"))
          actions.updateSingleRecipe(currentSingleRecipe)
          setDisplayRecipe(currentSingleRecipe)
          setTimeout(() => {
            setloading({ done: true });
            }, 5000)
      } else {
            getSingleRecipePage(id).then((recipe) => { 
                let newIng =ingredientFilter (recipe.extendedIngredients)
                recipe.extendedIngredients = newIng
                setDisplayRecipe(recipe)
                actions.updateSingleRecipe(recipe)
                setSingleRecipe(recipe)
                //filterIngredients(displayRecipe.extendedIngredients)
                setTimeout(() => {
                setloading({ done: true });
                }, 5000)
            }).catch((error) => { 
             if (error.response && error.response.status === 404){
              setloading({ done: false });
              toast.error("Sorry we could not load this recipe at this time.");
              }else{
              setloading({ done: false });
              toast.error(
                "There may be a problem with the server. Please try again after a few moments."
              );}
            })
       }
    },[])

  return (
    <div className={classes.root}>
     <Fadein in={true}  timeout={2000}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>{title}</h1>
            <div class={styles.searchButtonMove}>
             {displayRecipe.username ? (
            <Link to={"/recipes/saved-recipes"}>
                <Button class={styles.newSearch} >Back to Saved Recipes </Button>
            </Link>
            ) : (
              <>
            <Link to={"/recipes/browse"}>
                  <Button class={styles.newSearch} >Back to Search </Button>
            </Link>
              </>
             )}
            </div>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
            {displayRecipe.username ? (
            <div class={appstyles.subheading}>This recipe is in your Saved Recipes!</div>  
             ) : (
              <>
              <div class={appstyles.subheading} style={{alignSelf: "center"}}>Maybe save this recipe for later? 
              <Button variant="outlined" class={styles.savedButton} >Save Recipe!</Button>
              </div> 
              </>
             )}
             {!loading.done ? (
                <Loading />
              ) : (
                <>
                      <div class={styles.singleBox}>
                        <Grid  container spacing={1}  wrap="wrap" alignItems="center" justify="center" >
                              <div class={styles.summaryBox}> 
                                  <div class={styles.summaryText}>         
                                      <p><strong>Serves:</strong> {servings} </p>
                                      <p><strong>Cooking Time:</strong> {readyInMinutes} mins </p>
                                      <p><strong>Cuisines:</strong> { cuisines.length !== 0 ? <>{cuisines.join(" , ")}</> : <>n/a</> }</p>
                                      <p><strong>Dish Types:</strong> { dishTypes.length !== 0   ? <>{dishTypes.join(" , ")}</> : <>n/a</> }</p>
                                      <p><strong>Diets:</strong>  { diets.length !== 0   ? <>{diets.join(" , ")}</> : <>n/a</> }</p>
                                       <div class={styles.labels}>
                                        { vegetarian ? <span class={styles.icons}>Veg</span> : <></> }
                                        { vegan ? <span class={styles.icons}>Vg</span> : <></>}
                                        { glutenFree ? <span class={styles.icons}>Gf</span> : <></> }
                                        { dairyFree ? <span class={styles.icons}>Df</span> : <></> }
                                        { veryHealthy ? <span class={styles.icons}>Very Healthy</span> : <></> }
                                        { cheap ? <span class={styles.icons}>Cheap</span> : <></> }
                                        { veryPopular ? <span class={styles.icons}>Very Popular </span> : <></> }
                                        { sustainable ? <span class={styles.icons}>Sustainable</span> : <></> }
                                          </div>
                                      <a href={sourceUrl} > <p class={styles.url}><strong>View Source- With Full Instructions</strong> </p></a> 
                                  </div>  
                                    <div class={styles.imageBox}> 
                                      <img alt="recipe" src={image} />      
                                    </div>
                              </div>
                          <div class={styles.instructBox}> 
                              <h4>Ingredients</h4>
                              
                               <ul class={styles.ingredientBox}>
                                {extendedIngredients && extendedIngredients.map((ingredient) => (
                                  <li key={ingredient}> {ingredient.replace(/^\w/, (c) => c.toUpperCase())} </li>
                                   ))}    
                               </ul>  
                                
                              <h4>Instructions</h4>
                              <div>
                              <a href={sourceUrl} > <div class={styles.url}><strong>View Source- With Full Instructions</strong> </div></a> 
                              </div>

                          </div>  
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
  singleRecipe: state.recipes.singleRecipe,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateSingleRecipe: (username) =>
      dispatch({ type: "singleRecipe", payload: username }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
