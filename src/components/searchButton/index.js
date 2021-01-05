import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import styles from "./searchButton.module.css";

//MATERIAL
import Button from '@material-ui/core/Button';


const SearchRecipeButton = () => {
   let history = useHistory();
   const [errors, setErrors] = useState(null);
   const [loading, setloading] = useState(false);


  return (
    <Link to={"/recipes/browse"}>
      <Button variant="outlined" class={styles.searchButtonOutline} >Search Recipes!</Button>

    </Link>
  );
};


export default SearchRecipeButton
