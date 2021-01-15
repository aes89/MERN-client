import React from "react";
import { connect } from "react-redux";


import styles from "../styles/modals.module.css";
// import store from "../../index";




import Button from "@material-ui/core/Button";


import HelpIcon from '@material-ui/icons/Help';



const Help = ({actions,  modalId }) => {
  

  return (
    <div class={styles.loginSignupBox}>
          <h1>Help</h1>
            <div style={{alignSelf: "center"}}>
            <HelpIcon/>
            </div>
              
            <div class={styles.helpBox} >
                  <h4>What is Fridgemate?</h4>
                  <p>The purpose of this web application is for users 
                  to be able to enter ingredients which are always on their grocery 
                  list/fridge with the intent to search for recipes made up from those 
                  ingredients.</p>

                  <p>It works by inputting the ingredients you have currently 
                  at home and recipes including these ingredients will be displayed</p>

                  <h4>How to I add ingredients to my Fridge?</h4>
                   <p>You can click on the 'My Fridge" in the navigation.</p>
                   <p>Add ingredients via the add ingredient input.</p>
                   <p>You can either scroll through the list of ingredients, or type one in to search for it in the list.</p>
                  
                   <h4>How to I add staples to my Pantry?</h4>
                   <p>You can click on the 'Pantry Staples" in the navigation.</p>
                   <p>Add staples via the add ingredient input.</p>
                   <p>You can either scroll through the list of staples, or type one in to search for it in the list.</p>

                  <h4>How to I remove ingredients to my Fridge?</h4>
                   <p>When on the "My Fridge" page, you can either delete individual ingredients via the cross next 
                   to them or you can scroll to the bottom and clear your whole fridge.</p>
                  
                   <h4>How to I remove staples to my Pantry?</h4>
                   <p>When on the "Pantry Staples" page, you can either delete individual staples via the cross next 
                   to them or you can scroll to the bottom and clear your whole pantry.</p>
                   <h4>What are preferences and how to I pick them?</h4>
                   <p>If you navigate to the "My Preferences" page you are able to select a list of preferences that will be used 
                   when filtering recipes.</p>
                  <p>Currently our preference choices are limited, but they do include the most common, including gluten and dairy free.</p>
                  <p>We have future plans to add to this list.</p>

                  <h4>How do I search for recipes that use the ingredients in my fridge/pantry?</h4>
                  <p>If you click on the "browse recipes" button, it will conduct a search for recipes using the ingredients in your 
                  fridge/pantry and display recipes that include the ingredients you have.</p>
                  <p>If your fridge or pantry is currently empty, a random selection of recipes for inspiration will display on the search page.</p>

                  <h4>How do I saved a recipe?</h4>
                   <p>If you see a recipe you would like to save for future reference, 
                   simply click the "save recipe" button either on the main search page or on the individual recipe page.</p>
                   <p>To then remove from saved, click "remove" from the recipe on your saved recipes page.</p>

                  <h4>Who created Fridgemate?</h4>
                  <p>FridgeMate was created by Adrienne Smith & Shelby El-rassi</p>
            </div>
            <div style={{alignSelf: "center"}}>
                  <Button
                    class={styles.modalCancelButton}
                    onClick={() => actions.closeModal("help")}>
                    Back
                  </Button>
              </div>
    </div>

  );
};



const mapStateToProps = (state) => ({
   modalId: state.modalOpen.modal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
    closeModal: () => dispatch({ type: "closeModal" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Help);
