import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import appstyles from "../../app.module.css";
import styles from "./pantry.module.css";
import {
  getAllPantryIngredients,
  deleteAllPantry,
  setPantry,
  getPantry,
} from "../../services/ingredientServices";
import { getUsername } from "../../services/authServices";
//import ItemHandler from "./itemHandler";
import Logo from "../logo";
import Ingredients from "../ingredient";
import NoIngredients from "../noIngredientsPage";
import AutocompleteIngredients from "../ingredientAutocomplete";
import Loading from "../loading";

import useStyles from "../styles/makeStyles.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import pantry from "../styles/imgs/pantry.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pantry = ({ actions, pantryIngredients }) => {
  const classes = useStyles();
  let history = useHistory();
  const [errors, setErrors] = useState(null);
  const [loading, setloading] = useState({ done: false });

  const checker = getPantry();
  console.log(checker);

  useEffect(() => {
    getAllPantryIngredients(getUsername())
      .then((r) => {
        console.log(r);
        actions.addToPantry(r.pantryIngredients);
        setPantry(r.pantryIngredients);
        history.push("/ingredients/" + getUsername() + "/pantry");
      })
      .catch((error) => {
        //console.log("errors")
        console.log(error);
        if (error.response && error.response.status === 401)
          actions.changeError("Error getting pantry ingredients");
        else
          actions.changeError(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
    //for profile image?
    setTimeout(() => {
      setloading({ done: true });
      console.log("check loading done");
    }, 2500);
  }, []);

  const handleClearPantry = async () => {
    console.log("emptying all pantry");
    deleteAllPantry(getUsername())
      .then((r) => {
        console.log(r);
        actions.clearPantry();
        setPantry();
        history.push("/ingredients/" + getUsername() + "/pantry");
        toast.warn("You have no staples left in your pantry!");
      })
      .catch((error) => {
        //console.log("errors")
        //console.log(error.response)
        toast.error("Oh no, error!");
        if (error.response && error.response.status === 401)
          setErrors("Error clearing your Pantry");
        else
          setErrors(
            "There may be a problem with the server. Please try again after a few moments."
          );
      });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>My Pantry Staples</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
              {!loading.done ? (
                <Loading />
              ) : (
                <>
                  <AutocompleteIngredients type="pantry" />
                  <Grid
                    container
                    spacing={1}
                    wrap="wrap"
                    alignItems="center"
                    justify="center"
                  >
                    {checker ? (
                      <Ingredients ingredients={pantryIngredients} />
                    ) : (
                      <NoIngredients type="pantry" image={pantry} />
                    )}
                  </Grid>
                  {checker ? (
                    <Button
                      className={styles.button}
                      variant="outlined"
                      width="100px"
                      onClick={() => {
                        handleClearPantry();
                      }}
                    >
                      Clear All Pantry Contents
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
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
