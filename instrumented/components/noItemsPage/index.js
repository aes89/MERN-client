import React from "react";
import styles from "./noIngredients.module.css"

import SearchRecipeButton from "../searchButton";

import Grid from "@material-ui/core/Grid";

const NoIngredients = ({ image, type }) => {
   
   if (type === "recipes"){
        return (
                  <div>
                    <Grid item sm spacing={1} wrap="wrap">
                    <div class={styles.noBox}>
                    <div class={styles.imgBoxPage}>
                                <img alt="cartoon kitchen" src={image} />
                      </div>
                      <div class={styles.textBox}>
                      <p>Looks like you have no {type} saved! </p> 
                      <p><SearchRecipeButton/></p>
                      </div>
                      </div>
                    </Grid>
                  </div>
                );
   } else {
        return (
          <div>
            <Grid item sm spacing={1} wrap="wrap">
            <div class={styles.noBox}>
            <div class={styles.imgBoxPage}>
                        <img alt="cartoon kitchen" src={image} />
              </div>
              <div class={styles.textBox}>
              <p>Looks like you have no {type} items! </p> 
              <p>Would you like to enter some?</p>
              </div>
              </div>
            </Grid>
          </div>
        );
    }
 
};

export default NoIngredients;
