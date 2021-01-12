import { connect } from "react-redux";
import React, { useState,useEffect } from "react";

import pantrycartoon from "../styles/imgs/pantrycartoon.png";
import SearchRecipeButton from "../searchButton";
import styles from "./home.module.css";
import Logo from "../logo";
import Carousel from "../carousel";
import jokes from "../../data/recipeJokes.json";
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import Fadein from '@material-ui/core/Fade';



const Home = ({ actions, userLoggedIn }) => {
  const [joke, setJoke] = useState("");
  
  const text = {
        color: '#3F7209',
        marginLeft: "10px"
  }; 

  const img = {
        width: '10%',
        alignSelf: "center",
        borderRadius: "50%"
  }; 

  useEffect(() => {
       let randomObject = jokes[Math.floor(Math.random() * jokes.length)];
       setJoke(randomObject.name)
       console.log(randomObject.name)
       
      },[])

  return (
    <div className={styles.homeLayoutOnly}>
      <Logo />
       <Fadein in={true} timeout={2000}  >
      <main class={styles.homeContent}>
        <div class={styles.homeBox}>
         <Fade top>
           <p style={text}>{joke}</p>
         </Fade>
           
          <Swing>
          <h1 >What is in your fridge?</h1>
            </Swing>
           <Carousel/>
          <Fade bottom>
          <h3 >
            Just add ingredients to your fridge and FridgeMate will help find recipes
            personlised to you!
          </h3>
         </Fade>
          <SearchRecipeButton />
        </div>
      </main>
      </Fadein>
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
