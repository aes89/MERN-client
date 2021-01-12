import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styles from "./searchButton.module.css";
import {getUsername } from "../../services/authServices";
//MATERIAL
import Button from '@material-ui/core/Button';


const SearchRecipeButton = ({actions,userLoggedIn}) => {
  const { setModalOpen } = actions;
    if (userLoggedIn){
      return(
          <Link to={"/recipes/browse"}>
            <Button variant="outlined" class={styles.searchButtonOutline}>
               Browse Recipes! 
            </Button>
          </Link>
      )

    } else {
      return(

      <Button variant="outlined" 
      onClick={() => setModalOpen("register")}
      class={styles.searchButtonOutline}>
      Start Searching!
      </Button>

        )}
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setModalOpen: (modalId) => {
      dispatch({ type: "openModal", payload: modalId });
    },
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(SearchRecipeButton);

