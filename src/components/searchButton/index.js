import React from "react";
import { Link } from 'react-router-dom'
import styles from "./searchButton.module.css";

//MATERIAL
import Button from '@material-ui/core/Button';

const SearchRecipeButton = () => {
 
    

  return (
    <Link to={"/recipes/browse"}>
      <Button variant="outlined" class={styles.searchButtonOutline}>Search Recipes!</Button>
                

    </Link>
  );
};


export default SearchRecipeButton
