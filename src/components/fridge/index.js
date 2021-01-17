import React, { Fragment, useEffect,useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteAllFridge,getAllFridgeIngredients, getFridge, setFridge } from '../../services/ingredientServices'
import {getUsername} from '../../services/authServices'

import styles from "./fridge.module.css";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";

import AutocompleteIngredients from "../ingredientAutocomplete";
import Ingredients from "../ingredient";
import NoIngredients from "../noItemsPage";
import Logo from "../logo";
import SearchRecipeButton from "../searchButton";
import Loading from "../loading";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fadein from '@material-ui/core/Fade';

import fridge from "../styles/imgs/fridge.png";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                //console.log(r)
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
      //console.log("check loading done")  
            }, 2500);
  },[])


  const handleClearFridge = async () => {
        //console.log("emptying all fridge");
         deleteAllFridge(getUsername()).then((r) => {
              //console.log(r)
              actions.clearFridge()
              setFridge()
              history.push("/ingredients/"+getUsername()+"/fridge")
              toast.warn("You have no ingredients left in your fridge!")
          }).catch((error) => {
            //console.log("errors")
            //console.log(error.response)
              toast.error("Oh no, error!")
              if (error.response && error.response.status === 401)
              setErrors("Error clearing your Fridge")
              else   
              setErrors("There may be a problem with the server. Please try again after a few moments.")
          })
  };


  return (
    <div className={classes.root}>
      <Fadein in={true}  timeout={2000}>
      <Grid container spacing={0} >
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>My Fridge</h1>
             <div class={styles.searchButtonMove}>
                <SearchRecipeButton/>
              </div>
          </Grid>
        
      
          <Grid item xs={12} spacing={2}>
      
         
            <div class={appstyles.layoutContent}>
                   {errors && <div>Error: {errors}</div>}
            {!loading.done ? (
           <Loading/>
              ) : (  
            <>
             <div class={appstyles.subheading}>Add ingredients to your Fridge Below and we will use them to find you recipes!</div>
                  
               <div class={styles.fridgeAutoBox}> 
              <AutocompleteIngredients type="fridge"/> 
              <div class={styles.fridge}> <img alt="Fridge cartoon" src={fridge} /></div>
              </div>
              <Grid container spacing={1} wrap="wrap" alignItems="center" justify="center" class={styles.background}>
              {checker ?  <Ingredients ingredients={fridgeIngredients}/> : <NoIngredients type="fridge" image={fridge}/>  } 
              </Grid>
              {checker  ?   <div className={styles.button} ><Button variant="outlined" width="100px" onClick={() => { handleClearFridge() }}>Clear All Fridge Contents</Button></div> : <div></div>  } 
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
