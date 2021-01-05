import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import styles from "./searchButton.module.css";
import {browseSearchRecipes,  getBrowsedRecipes, setBrowsedRecipes} from '../../services/recipeServices'


//MATERIAL
import Button from '@material-ui/core/Button';


const SearchRecipeButton = () => {
   let history = useHistory();
   const [errors, setErrors] = useState(null);
   const [loading, setloading] = useState(false);


async function searchHandler () {
  setBrowsedRecipes()
      await browseSearchRecipes().then((recipe) => {
              console.log(JSON.stringify(recipe[0].id))
              console.log("hit here testing")
               
              // const newArray = []

              // recipe.map(recipe => {
              //   newArray.push({
              //     "id": JSON.stringify(recipe.id),
              //     "usedIngred": JSON.stringify(recipe.usedIngred), 
              //     "missedIngred": JSON.stringify(recipe.usedIngred),
              //     "title": JSON.stringify(recipe.title),
              //     "readyInMinutes": JSON.stringify(recipe.readyInMinutes),
              //     "servings": JSON.stringify(recipe.servings),
              //     "image": JSON.stringify(recipe.image),
              //     })
              //   });
              console.log("testing", {recipes: recipe})

             console.log("hit here again")
             setBrowsedRecipes({recipes: recipe}) 
             console.log("gfdfdf", {recipes: recipe})
             console.log("check loading done") 

             setTimeout(() => {
             
             history.push("/recipes/browse")
             }, 5000);
          }).catch((error) => {
              console.log("errors")
              console.log(error)
              if (error.response && error.response.status === 401)
              setErrors("Authentication failed. Please check your username and password.")
              else   
             setErrors("There may be a problem with the server. Please try again after a few moments.")
          })	

    }

  return (
    <Link to={"/recipes/browse"}>
      <Button variant="outlined" class={styles.searchButtonOutline} onClick={searchHandler}>Search Recipes!</Button>

    </Link>
  );
};


export default SearchRecipeButton
