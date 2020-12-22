import { connect } from "react-redux";
import React, { Fragment } from "react";

import UserSettings from "../userSettings";
import Preferences from "../preferences";
import SearchRecipeButton from "../resuables/searchButton";
import LoggedIn from "../logged-in";
import styles from "../styles/home.module.css";
import AuthenticationModal from "../AuthenticationModal";
import Logo from "../resuables/logo";
import { BorderBottom } from "@material-ui/icons";

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
          <AuthenticationModal />
          <div>
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
