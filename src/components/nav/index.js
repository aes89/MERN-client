import React, { Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import styles from "./nav.module.css";

import SearchRecipeButton from "../searchButton";
import AuthenticationModal from "../AuthenticationModal";
import {logoutUser, getProfile } from "../../services/authServices";

//MATERIAL
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Fadein from '@material-ui/core/Fade';
import HelpIcon from '@material-ui/icons/Help';


//IMAGES-icons
import fridge from "../styles/imgs/fridge.png";
import pantry from "../styles/imgs/pantry.png";
import pref from "../styles/imgs/preference.png";
import list from "../styles/imgs/list.png";
import ProfileDefault from "../styles/imgs/profileDefault.png";

//FOOD IMAGES
import carrot from "../styles/imgs/carrot.png";
import chilli from "../styles/imgs/chilli.png";
import corn from "../styles/imgs/corn.png";
import egg from "../styles/imgs/egg.png";
import garlic from "../styles/imgs/garlic.png";
import radish from "../styles/imgs/radish.png";
import ramen from "../styles/imgs/ramen.png";
import tomato from "../styles/imgs/tomato.png";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = ({ actions, userLoggedIn, currentUserSettings,currentProfile }) => {
  let history = useHistory();
  //const [profile, setProfile] = useState("");
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
    useEffect(() => {
         actions.updateProfile({profile: getProfile()})
        });
  function handleLogout() {
    logoutUser()
      .then((r) => {
        //console.log("Got back response on logout", r);
        console.log("loged out")
        history.push("/");
        toast.success("Come back soon!")
      })
      .catch((error) => {
        toast.error("Oh no, error loggin out!", error)
        console.log(
          "The server may be down - caught an exception on logout:",
          error
        );
      });
      
    //clear storage if error
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("fridge")
    localStorage.removeItem("pantry")
    localStorage.removeItem("browsedRecipes")
    localStorage.removeItem("profile")
    actions.removeProfile()
    actions.logout()
    
}

  return (
    <div class={styles.navBox}>
      <AuthenticationModal />
      <a class={styles.trigger}>
        <i>
          <MoreVertIcon fontSize="large" />
        </i>
      </a>
      <Fadein in={true}  timeout={2000}>
      <nav class={styles.nav}>
        <ul>
          <li>
            <Link to={"/user/" + userLoggedIn + "/account-settings"}>
              <div class={styles.userProfile}>
                {currentProfile ? (
                  <img alt="profile of user" src={currentProfile} /> ) : (
                  <img alt="profile default of user" src={ProfileDefault} /> )}
                {userLoggedIn ? <div>{userLoggedIn}</div> : <div></div>}
              </div>
            </Link>
          </li>
          <li>
            <SearchRecipeButton />
            <a class={styles.navLink}></a>
          </li>
          <li>
            <Link
              to={"/ingredients/" + userLoggedIn + "/fridge"}
              class={styles.navLink}
            >
              <img alt="Fridge" src={fridge} />
              <div>My Fridge</div>
            </Link>
          </li>
          <li>
            <Link to={`/ingredients/${userLoggedIn}/pantry`} class={styles.navLink}>
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
            <Link to={"/preferences/" + userLoggedIn} class={styles.navLink}>
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
                  <Button variant="outlined" class={styles.navButtonstyle} onClick={handleLogout}>
                    Log out
                  </Button>
                </Fragment>
              ) : (
                <Fragment>
                  <Button
                    variant="outlined"
                    class={styles.navButtonstyle}
                    onClick={() => setModalOpen("login")}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    class={styles.navButtonstyle}
                    onClick={() => setModalOpen("register")}
                  >
                    Register
                  </Button>
                </Fragment>
              )}
              
            </Fragment>
          </li>
          <li style={{ textAlign: 'left', padding: '10px', }}>
            <Button 
             onClick={() => setModalOpen("help")}>
            <HelpIcon/>
            </Button>
          </li>
        </ul>
           
      </nav>
    </Fadein>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
  currentUserSettings: state.currentUserSettings,
  currentProfile: state.currentUserSettings.profile,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setModalOpen: (modalId) => {
      dispatch({ type: "openModal", payload: modalId });
    },
    logIn: () => dispatch({ type: "login" }),
    logout: () => dispatch({ type: "logout" }),
    removeProfile: () => dispatch({ type: "removeProfile" }),
    updateProfile: ({ profile }) =>
      dispatch({ type: "updateProfile", payload: {profile } }),
  },
});

// export default navBar;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
