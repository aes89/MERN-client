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
      await browseSearchRecipes().then((r) => {
              console.log(JSON.stringify(r[0].id))
              //console.log(JSON.parse(JSON.stringify(r)))
              const toSave = []
               r.map((recipe) => (
                     toSave.push(recipe)     
                ))
                console.log("checktosave", toSave)
               //setBrowsedRecipes(JSON.parse(JSON.stringify(r)))
               setBrowsedRecipes(toSave)
              history.push("/recipes/browse")
             
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
