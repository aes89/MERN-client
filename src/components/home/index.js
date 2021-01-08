import { connect } from "react-redux";
import React, { useState,useEffect } from "react";


import SearchRecipeButton from "../searchButton";
import styles from "./home.module.css";
import Logo from "../logo";
import jokes from "../../data/recipeJokes.json";

const Home = ({ actions, userLoggedIn }) => {
  const [joke, setJoke] = useState("");

  const { setModalOpen } = actions;

  useEffect(() => {
       let randomObject = jokes[Math.floor(Math.random() * jokes.length)];
       setJoke(randomObject.name)
       console.log(randomObject.name)
       
      },[])

  return (
    <div className={styles.homeLayoutOnly}>
      <Logo />
      <main className={` ${styles.homeContent}`}>
        <div className={styles.homeBox}>
           <p>{joke}</p>
          <h1>What is in your fridge?</h1>
          <h3>
            Just add your ingredients and FridgeMate will help find recipes
            personlised to you!
          </h3>
          <SearchRecipeButton />
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
