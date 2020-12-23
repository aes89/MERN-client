import { connect } from "react-redux";
import React, { Fragment } from "react";

import UserSettings from "../userSettings";
import Preferences from "../preferences";
import LoggedIn from "../logged-in";
import AuthenticationModal from "../AuthenticationModal";
import { BorderBottom } from "@material-ui/icons";
import SearchRecipeButton from "../searchButton";
import AutocompleteIngredients from "../ingredientAutocomplete";
import styles from "./home.module.css";
import Logo from "../logo";

const Home = ({ actions, userLoggedIn }) => {
  const { setModalOpen } = actions;
  return (
    <div className={styles.homeLayoutOnly}>
      <Logo />
      <main className={` ${styles.homeContent}`}>
        <div className={styles.homeBox}>
          <p>Random Food Jokes API</p>
          <h1>What is in your fridge?</h1>
          <h3>
            Just add your ingredients and FridgeMate will help find recipes
            personlised to you!
          </h3>
          <SearchRecipeButton />
          <AutocompleteIngredients />
    
          <div>
          <AuthenticationModal />
            {userLoggedIn ? (
              <LoggedIn />
            ) : (
              <Fragment>
                <button onClick={() => setModalOpen("login")}>Login</button>
                <button onClick={() => setModalOpen("register")}>
                  Register
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </main>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
