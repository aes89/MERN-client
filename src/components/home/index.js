import { connect } from "react-redux";
import React, { Fragment } from "react";

import UserSettings from "../userSettings";
import Preferences from "../preferences";
import SearchRecipeButton from "../resuables/searchButton";
import styles from "../styles/home.module.css";
import AuthenticationModal from "../AuthenticationModal";
import Logo from "../resuables/logo";

const Home = ({ actions, userLoggedIn }) => {
  const { setModalOpen } = actions;
  return (
    <Fragment>
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
              <Fragment>
                <UserSettings /> <Preferences />
              </Fragment>
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
    </Fragment>
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