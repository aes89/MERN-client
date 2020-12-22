import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import SearchRecipeButton from "../searchButton";
import styles from "./nav.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import Modal from "react-modal";
import AuthenticationModal from "../AuthenticationModal";

//IMAGES-icons
import fridge from "../styles/imgs/fridge.png";
import pantry from "../styles/imgs/pantry.png";
import pref from "../styles/imgs/preference.png";
import list from "../styles/imgs/list.png";

//FOOD IMAGES
import carrot from "../styles/imgs/carrot.png";
import chilli from "../styles/imgs/chilli.png";
import corn from "../styles/imgs/corn.png";
import egg from "../styles/imgs/egg.png";
import garlic from "../styles/imgs/garlic.png";
import radish from "../styles/imgs/radish.png";
import ramen from "../styles/imgs/ramen.png";
import tomato from "../styles/imgs/tomato.png";

const navBar = ({ actions, userLoggedIn }) => {
  const { setModalOpen } = actions;
  const listFoodImg = [
    carrot,
    chilli,
    corn,
    egg,
    garlic,
    radish,
    ramen,
    tomato,
  ];
  let randomFoodImg =
    listFoodImg[Math.floor(Math.random() * listFoodImg.length)];

  return (
    <div class={styles.navBox}>
      <AuthenticationModal />
      <a class={styles.trigger}>
        <i>
          <MoreVertIcon />
        </i>
      </a>
      <nav class={styles.nav}>
        <ul>
          <li> 
          <Link to={`/user/${userLoggedIn}/account-settings`} >
              <div class={styles.userProfile}>
                <img alt="Users profile image" src={fridge} />
                <div>User's Name</div>
              </div>
            </Link>
          </li>
      
          <li>
            {" "}
            <SearchRecipeButton />
            <a class={styles.navLink}></a>
          </li>
          <li>
          <Link to= {`/ingredients/ ${userLoggedIn}/fridge`} class={styles.navLink}>
              <img alt="Fridge" src={fridge} />
              <div>My Fridge</div>
              </Link>
          </li>
          <li>
          <Link to={`/ingredients/ ${userLoggedIn}/fridge`} class={styles.navLink}>
              <img alt="Pantry" src={pantry} />
              <div>Pantry Staples</div>
          </Link>
          </li>
          <li>
          <Link to="/recipes/saved-recipes" class={styles.navLink}>
              <img alt="list" src={list} />
              <div>Saved Recipes</div>
          </Link>
          </li>
          <li>
          <Link to={`/user/${userLoggedIn}/preferences`}class={styles.navLink}>
              <img alt="preference" src={pref} />
              <div> My Preferences</div>
          </Link>
          </li>
          <li class={styles.foodPic}>
            <img alt="picture of food" src={randomFoodImg} />
          </li>
          <li class={styles.navButtons}>
            <Fragment>
              {userLoggedIn ? (
                <Fragment>
                  {" "}
                  <button
                    class={styles.loginSignupButtons}
                    onClick={actions.logout}
                  >
                    Log out
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <button onClick={() => setModalOpen("login")}>Login</button>
                  <button onClick={() => setModalOpen("register")}>
                    Register
                  </button>
                </Fragment>
              )}
              <button
                class={styles.loginSignupButtons}
                onClick={actions.logout}>
                {userLoggedIn ? <Fragment>1</Fragment> : <Fragment>2</Fragment>}
                LOG OUT
              </button>
            </Fragment>
          </li>
        </ul>
      </nav>
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
    logIn: () => dispatch({ type: "login" }),
    logout: () => dispatch({ type: "logout" }),
  },
});

// export default navBar;

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
