import React,{useState, useEffect} from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./listRecipe.module.css";
import useStyles from "../styles/makeStyles.js";

//MATERIAL
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Loading from "../loading";


const ListedRecipe = ({userLoggedIn, recipe, saveRecipe, savedType, removeSavedRecipe}) => {
  const classes = useStyles();
  //const [addRecipe, setAddRecipe] = useState("");
  const [loading, setloading] = useState({ done: false });
  const {recipeID, id, _id,
  usedIngred, 
  missedIngred, 
  title, readyInMinutes, servings, image} = recipe 

  let convert = Math.floor(readyInMinutes / 60) + " hour and " +  readyInMinutes % 60 + " minutes"
      
    //   useEffect(() => {
    //     console.log("state updated for setAddrecipe")
    //   setAddRecipe(recipe)
    
    // },[])
  async function collectRecipeHandler () {
    //console.log("state updated for setAddrecipe")
      //setAddRecipe(recipe)
      let addRecipe = recipe
      const newRecipe = {
                  username: userLoggedIn,
                  recipeID: addRecipe.id ,
                  title: addRecipe.title,
                  readyInMinutes: addRecipe.readyInMinutes,
                  extendedIngredients: addRecipe.extendedIngredients,
                  servings: addRecipe.servings,
                  sourceUrl: addRecipe.sourceUrl,
                  image: addRecipe.image,
                  cuisines: addRecipe.cuisines,
                  dishTypes: addRecipe.dishTypes,
                  diets: addRecipe.diets,
                  instructions:  addRecipe.instructions,
              }
        setloading({ done: false });
        await saveRecipe(newRecipe)
        setTimeout(() => {
          setloading({ done: true });
          console.log("check loading done") 
          }, 5000)
        console.log("hit here")
  }

  async function deleteRecipeHandler (id) {
    console.log("check addRecipe done",id) 
      setloading({ done: false }); 
      await removeSavedRecipe(id)
        setTimeout(() => {
          setloading({ done: true });
          console.log("check loading done") 
          }, 5000)
        console.log("hit here")
   }

   
   if (savedType ==="saved recipes") {
   //This is for save Recipe page
    return (
            <div>
                {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
                <Grid item sm spacing={1}   wrap="wrap">
                 <Link to={"/recipes/" + _id +"/recipe"  }>
                  <Paper className={classes.paper} variant="outlined" > 
                          <div class={styles.listItem}>
                                  <img alt="recipe" src={image} />        
                                  <h3>{title}</h3>
                                  <p>Serves: {servings}</p>
                                  <p>Prep time: {convert}</p>
                                </div>
                            <Button variant="outlined" class={styles.removeButton} onClick={()=>{deleteRecipeHandler(_id)}}>Remove</Button>
                    </Paper>  
                 </Link>
                </Grid>
            </div>)

   } else {
  //This is for browse Recipe page
    return (
        <div>
            {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
           <Grid item sm spacing={1}   wrap="wrap">
          
                <Paper className={classes.paper} variant="outlined" > 
                <Link to={"/recipes/" + id +"/recipe" }>
                <div class={styles.listItem}>
                    <div>You have {usedIngred}/{usedIngred+ missedIngred} ingredients! </div>
                    <img alt="recipe" src={image} />        
                    <h3>{title}</h3>
                    <p>Serves: {servings}</p>
                    <p>Prep time: {convert}</p>
                </div>
                 </Link>
                 <Button variant="outlined" class={styles.savedButton} onClick={collectRecipeHandler}>Save Recipe!</Button>
               
               </Paper>
           
        </Grid>
        </div>
    )
    }
}

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setModalOpen: (modalId) => {
      dispatch({ type: "openModal", payload: modalId });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListedRecipe);

