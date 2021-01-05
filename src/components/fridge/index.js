import React, { Fragment, useEffect,useState } from "react";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import { deleteAllFridge,getAllFridgeIngredients, getFridge, setFridge } from '../../services/ingredientServices'
import {getUsername} from '../../services/authServices'

import appstyles from "../../app.module.css";
import AutocompleteIngredients from "../ingredientAutocomplete";
import Ingredients from "../ingredient";
import NoIngredients from "../noIngredientsPage";
import Logo from "../logo";

import Loading from "../loading";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "../styles/makeStyles.js";

import fridge from "../styles/imgs/fridge.png";



const Fridge = ({actions, fridgeIngredients}) => {
  const classes = useStyles();
  let history = useHistory();
  const [errors, setErrors] = useState(null);
   const [loading, setloading] = useState({ done: false });
  

  const checker = getFridge()
  console.log(checker)

  useEffect(() => {
    //update this so if local storage is full of ingredients dont call the DB
    getAllFridgeIngredients(getUsername()).then((r) => {
                console.log(r)
                actions.addToFridge(r.fridgeIngredients)
                setFridge(r.fridgeIngredients)
                history.push("/ingredients/"+getUsername()+"/fridge")
            }).catch((error) => {
              //console.log("errors")
              //console.log(error.response)
                if (error.response && error.response.status === 401)
                actions.changeError("Error getting fridge ingredients")
                else   
                actions.changeError("There may be a problem with the server. Please try again after a few moments.")
            })    
      setTimeout(() => {
      setloading({ done: true })
      console.log("check loading done")  
            }, 2500);
  },[])


  const handleClearFridge = async () => {
        console.log("emptying all fridge");
         deleteAllFridge(getUsername()).then((r) => {
              console.log(r)
              actions.clearFridge()
              setFridge()
              history.push("/ingredients/"+getUsername()+"/fridge")
          }).catch((error) => {
            //console.log("errors")
            //console.log(error.response)
              if (error.response && error.response.status === 401)
              setErrors("Error clearing your Fridge")
              else   
              setErrors("There may be a problem with the server. Please try again after a few moments.")
          })
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>My Fridge</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
            {!loading.done ? (
           <Loading/>
              ) : (  
            <>
              <AutocompleteIngredients type="fridge"/>
              <Grid container spacing={1} wrap="wrap" alignItems="center" justify="center">
              {checker ?  <Ingredients ingredients={fridgeIngredients}/> : <NoIngredients type="fridge" image={fridge}/>  } 
              </Grid>
              {checker  ?   <Button onClick={() => { handleClearFridge() }}>Clear Fridge Contents</Button> : <div></div>  } 
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
  fridgeIngredients: state.userIngredients.fridgeIngredients,
  error: state.errorsMessages
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addToFridge: ( ingredients ) =>
      dispatch({ type: "fridgeIngredients", payload: ingredients }),
    clearFridge: () => dispatch({ type: "deleteAllFridge" }),
    changeError: ( error ) =>
      dispatch({ type: "error", payload: error }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
