import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import styles from "./searchButton.module.css";

//MATERIAL
import Button from '@material-ui/core/Button';
import {getBrowsedRecipes, setBrowsedRecipes} from '../../services/recipeServices'


const SearchRecipeButton = () => {
   let history = useHistory();
   const [errors, setErrors] = useState(null);
   const [loading, setloading] = useState(false);

  if (getBrowsedRecipes !== null) {

  
  } else {


  }
  return (
    <Link to={"/recipes/browse"}>
      <Button variant="outlined" class={styles.searchButtonOutline} >Find Recipes!</Button>

    </Link>
  );
};


export default SearchRecipeButton
