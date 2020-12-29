import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import styles from "./nav.module.css";

import SearchRecipeButton from "../searchButton";
import AuthenticationModal from "../AuthenticationModal";
import {logoutUser} from '../../services/authServices'
import Logo from "../logo";

//MATERIAL
import Button from '@material-ui/core/Button';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


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

const NavBar = ({ actions, userLoggedIn, currentUserSettings}) => {
  let history = useHistory();
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


  function handleLogout() {
      logoutUser().then((response) => {
          console.log("Got back response on logout", response.status)
          history.push("/")
      }).catch ((error) => {
          console.log("The server may be down - caught an exception on logout:", error)
      })
      // Even if we catch an error, logout the user locally
      // Remove the token from localStorage
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      actions.logout()
  }

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
      
        {/* <List disablePadding dense>
            <ListItem button>
            <img alt="Fridge" src={fridge} width="20%"/>
              <ListItemText>My Fridge</ListItemText>
            </ListItem>
            <ListItem button>
            <img alt="Fridge" src={pantry} width="20%"/>
              <ListItemText>My Pantry</ListItemText>
            </ListItem>
            <ListItem button>
            <img alt="Fridge" src={list} width="20%"/>
              <ListItemText>Saved Recipes</ListItemText>
            </ListItem>
            <ListItem button>
            <img alt="Fridge" src={pref} width="20%"/>
              <ListItemText>My Preferences</ListItemText>
            </ListItem>
        </List> */}
                <li>
                  <Link to={"/user/"+userLoggedIn+"/account-settings"}>
                    <div class={styles.userProfile}>
                    {currentUserSettings.profile ? (<img  alt="Users profile image"  src={currentUserSettings.profile} />) : (
          <AccountCircleIcon  fontSize="large"/>)}
                      {userLoggedIn? (<div>{userLoggedIn}</div>) : (<div></div>)}
                    </div>
                  </Link>
                </li>
          <li>
            <SearchRecipeButton />
            <a class={styles.navLink}></a>
          </li>
          <li>
            <Link
              to={"/ingredients/"+userLoggedIn+"/fridge"}
              class={styles.navLink}
            >
              <img alt="Fridge" src={fridge} />
              <div>My Fridge</div>
            </Link>
          </li>
          <li>
            <Link
              to={"/ingredients/"+userLoggedIn+"/pantry"}
              class={styles.navLink}
            >
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
            <Link
              to={"/preferences/"+userLoggedIn}
              class={styles.navLink}
            >
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
                  <Button variant="outlined" onClick={ handleLogout} >Log out</Button>
                </Fragment>
              ) : (
                <Fragment>
                  <Button variant="outlined" onClick={() => setModalOpen("login")} >Login</Button>
                  <Button variant="outlined" onClick={() => setModalOpen("register")} >Register</Button>
                </Fragment>
              )}
            </Fragment>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
  currentUserSettings: state.currentUserSettings,
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
