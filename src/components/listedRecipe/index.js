import React from 'react'
import styles from "./listRecipe.module.css";
import useStyles from "../styles/makeStyles.js";

//MATERIAL
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const ListedRecipe = ({recipe, saveRecipe, savedType, removeSavedRecipe}) => {
  const classes = useStyles();

 const {id, usedIngred, missedIngred, title, readyInMinutes, servings, image} = recipe 

 let convert = Math.floor(readyInMinutes / 60) + " hour and " +  readyInMinutes % 60 + " minutes"


   if (savedType ==="saved recipes") {
   //This is for save Recipe page
    return (
            <div>
                {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
                <Grid item sm spacing={1}   wrap="wrap">
                  <Paper className={classes.paper} variant="outlined" > 
                    <div class={styles.listItem}>
                            <img alt="recipe" src={image} />        
                            <h3>{title}</h3>
                            <p>Serves: {servings}</p>
                            <p>Prep time: {convert}</p>
                           </div>
                            <Button variant="outlined" class={styles.removeButton} onClick={removeSavedRecipe}>Remove</Button>
                    </Paper>
                </Grid>
            </div>)

   } else {
  //This is for browse Recipe page
    return (
        <div>
            {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
           <Grid item sm spacing={1}   wrap="wrap">
                <Paper className={classes.paper} variant="outlined" > 
                <div class={styles.listItem}>
                    <div>You have {usedIngred}/{usedIngred+ missedIngred} ingredients! </div>
                    <img alt="recipe" src={image} />        
                    <h3>{title}</h3>
                    <p>Serves: {servings}</p>
                    <p>Prep time: {convert}</p>
                </div>
                <Button variant="outlined" class={styles.savedButton} onClick={saveRecipe}>Save Recipe!</Button>
               </Paper>
        </Grid>
        </div>
    )
    }
}

export default ListedRecipe

