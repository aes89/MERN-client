import React from "react";
import { Link } from 'react-router-dom'
import styles from "./searchButton.module.css";

const SearchRecipeButton = () => {
 


  return (
    <Link to={"/recipes/browse"}>
    <div class={styles.searchButtonOutline}>
      <button >Search Recipes!</button>
    </div>
    </Link>
  );
};


export default SearchRecipeButton
