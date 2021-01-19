import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./listRecipe.module.css";
import useStyles from "../styles/makeStyles.js";
import cartoonPlaceholder from "../styles/imgs/cartooningredients.png";

//MATERIAL
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import KitchenIcon from "@material-ui/icons/Kitchen";


const ListedRecipe = ({
  userLoggedIn,
  recipe,
  saveRecipe,
  savedType,
  removeSavedRecipe,
  // loadingFridge,
  idCheck,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const {
    recipeID,
    id,
    _id,
    usedIngred,
    missedIngred,
    title,
    readyInMinutes,
    servings,
    image,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryHealthy,
    cheap,
    veryPopular,
    sustainable,
  } = recipe;

  let convert =
    Math.floor(readyInMinutes / 60) +
    " hr & " +
    (readyInMinutes % 60) +
    " mins";

  async function collectRecipeHandler() {
    let addRecipe = recipe;
    const newRecipe = {
      username: userLoggedIn,
      recipeID: addRecipe.id,
      title: addRecipe.title,
      readyInMinutes: addRecipe.readyInMinutes,
      extendedIngredients: addRecipe.extendedIngredients,
      servings: addRecipe.servings,
      sourceUrl: addRecipe.sourceUrl,
      image: addRecipe.image,
      cuisines: addRecipe.cuisines,
      dishTypes: addRecipe.dishTypes,
      diets: addRecipe.diets,
      instructions: addRecipe.instructions,
      vegetarian: addRecipe.vegetarian,
      vegan: addRecipe.vegan,
      glutenFree: addRecipe.glutenFree,
      dairyFree: addRecipe.dairyFree,
      veryHealthy: addRecipe.veryHealthy,
      cheap: addRecipe.cheap,
      veryPopular: addRecipe.veryPopular,
      sustainable: addRecipe.sustainable,
    };
    setLoading(true);
    await saveRecipe(newRecipe);
    setTimeout(() => {
        setLoading(false);
    },5000);
  }

  async function deleteRecipeHandler(id) {
    setLoading(true);
    await removeSavedRecipe(id);
    setLoading(false);
  }
 // console.log("id and idCheck", { id, idCheck });

  if (savedType === "saved recipes") {
    //This is for save Recipe page
    return (
      <div>
        <Grid item sm spacing={1} wrap="wrap">
          <Paper className={classes.paper} variant="outlined">
            <Link to={"/recipes/" + _id + "/recipe"}>
              <div class={styles.listItem}>
                {image ? (
                  <img alt="recipe" src={image} />
                ) : (
                  <img alt="recipe" src={cartoonPlaceholder} />
                )}
                <h3>{title}</h3>
                <p>Serves: {servings}</p>
                <p>Prep time: {convert}</p>
              </div>
            </Link>
            <Button
              variant="outlined"
              class={styles.removeButton}
              onClick={() => {
                deleteRecipeHandler(_id);
              }}
            >
              Remove
            </Button>
          </Paper>
        </Grid>
      </div>
    );
  } else {
    //This is for browse Recipe page
    return (
      <div>
        <Grid item sm spacing={1} wrap="wrap">
          <Paper className={classes.paper} variant="outlined">
            <Link to={"/recipes/" + id + "/recipe"}>
              <div class={styles.listItem}>
              {missedIngred ? (
                <div>
                  You have {usedIngred}/{usedIngred + missedIngred} ingredients!{" "}
                </div>
                 ) : (
                  <></>
                   )}
                {image ? (
                  <img alt="recipe" src={image} />
                ) : (
                  <img alt="recipe" src={cartoonPlaceholder} />
                )}
                <h3>{title}</h3>
                <p>
                  <strong>Serves:</strong> {servings}
                </p>
                <p>
                  <strong>Prep time:</strong> {convert}
                </p>
                <div class={styles.labels}>
                  {vegetarian ? <span class={styles.icons}>Veg</span> : <></>}
                  {vegan ? <span class={styles.icons}>Vg</span> : <></>}
                  {glutenFree ? <span class={styles.icons}>Gf</span> : <></>}
                  {dairyFree ? <span class={styles.icons}>Df</span> : <></>}
                </div>
              </div>
            </Link>
            {loading ? (
              <KitchenIcon className={styles.fridgeIcon} />
            ) : (
              <Button
                variant="outlined"
                class={styles.savedButton}
                onClick={collectRecipeHandler}
              >
                Save Recipe!
              </Button>
            )}
          </Paper>
        </Grid>
      </div>
    );
  }
};

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
