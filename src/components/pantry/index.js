import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import appstyles from "../../app.module.css";
import styles from "./pantry.module.css";
import useStyles from "../styles/makeStyles.js";

import {
  getAllPantryIngredients,
  deleteAllPantry,
  setPantry,
  getPantry,
} from "../../services/ingredientServices";
import { getUsername } from "../../services/authServices";

import Logo from "../logo";
import Ingredients from "../ingredient";
import NoIngredients from "../noItemsPage";
import AutocompleteIngredients from "../ingredientAutocomplete";
import Loading from "../loading";
import SearchRecipeButton from "../searchButton";


import Fadein from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import pantry from "../styles/imgs/pantry.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pantry = ({ actions, pantryIngredients }) => {
  const classes = useStyles();
  let history = useHistory();
  const [errors, setErrors] = useState(null);
  const [loading, setloading] = useState({ done: false });

  const checker = getPantry();
  //console.log(checker);

  useEffect(() => {
    getAllPantryIngredients(getUsername())
      .then((res) => {
        //console.log(r);
        actions.addToPantry(res.pantryIngredients);
        setPantry(res.pantryIngredients);
        history.push("/ingredients/" + getUsername() + "/pantry");
      })
      .catch((error) => {
        //console.log("errors")
        //console.log(error);
        if (error.response && error.response.status === 401)
          actions.changeError("Sorry we could not get your pantry at this time.");
        else
          actions.changeError(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
        setTimeout(() => {
        setloading({ done: true })
        console.log("check loading done")  
        }, 4000);
  }, []);

  const handleClearPantry = async () => {
    //console.log("emptying all pantry");
    deleteAllPantry(getUsername())
      .then((res) => {
        //console.log(r);
        actions.clearPantry();
        setPantry();
        history.push("/ingredients/" + getUsername() + "/pantry");
        toast.warn("You have no staples left in your pantry!");
      })
      .catch((error) => {
        //console.log("errors")
        //console.log(error.response)
        toast.error("Sorry, we could not clear your pantry at this time.");
        if (error.response && error.response.status === 401)
          setErrors("Sorry, we could not clear your pantry at this time.");
        else
          setErrors(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  };

  return (
    <div className={classes.root}>
     <Fadein in={true}  timeout={2000}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>My Pantry Staples</h1>
            <div class={styles.searchButtonMove}>
              <SearchRecipeButton />
            </div>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
              {errors && <div>Error: {errors}</div>}
              {!loading.done ? (
                <Loading />
              ) : (
                <>
                <div class={appstyles.subheading}>Add staples to your Pantry Below and we will use them to find you recipes!</div>
                  <div class={styles.pantryAutoBox}>
                    <AutocompleteIngredients type="pantry" />
                    <div class={styles.pantry}>
               
                      <img alt="cartoon pantry " src={pantry} />
                    </div>
                  </div>
                  <Grid
                    container
                    spacing={1}
                    wrap="wrap"
                    alignItems="center"
                    justify="center"
                    class={styles.background}
                  >
                    {checker ? (
                      <Ingredients ingredients={pantryIngredients} />
                    ) : (
                      <NoIngredients type="pantry" image={pantry} />
                    )}
                  </Grid>
                  {checker ? (
                    <div className={styles.button}>
                      <Button
                        variant="outlined"
                        width="100px"
                        onClick={() => {
                          handleClearPantry();
                        }}
                      >
                        Clear All Pantry Contents
                      </Button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
     </Fadein>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pantryIngredients: state.userIngredients.pantryIngredients,
  error: state.errorsMessages,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addToPantry: (newIngredients) =>
      dispatch({ type: "pantryIngredients", payload: newIngredients }),
    clearPantry: () => dispatch({ type: "deleteAllPantry" }),
    changeError: (error) => dispatch({ type: "error", payload: error }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pantry);
