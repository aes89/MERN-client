import { connect } from "react-redux";
import React, { Fragment,useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { userAuthenticated, setLoggedInUser, getLoggedInUser, getUsername, setUsername } from "./services/authServices"

// import "./App.css";
// import Modal from "react-modal";
// import styles from "./components/styles/app.module.css";
// import AuthenticationModal from "./components/AuthenticationModal";
import store from "./index";
import UserSettings from "./components/userSettings";
import Preferences from "./components/preferences";
import BrowseRecipes from "./components/browseRecipes";
import SavedRecipes from "./components/savedRecipes";
import SingleRecipe from "./components/singleRecipe";
import NotFound from "./components/notFound";
import Nav from "./components/nav";
import Home from "./components/home";
import Fridge from "./components/fridge";
import Pantry from "./components/pantry";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = ({ actions, userLoggedIn,currentUserSettings }) => {

  useEffect(() => {
    try {
      actions.logIn(getUsername())	

      actions.getToken(getLoggedInUser())	 
    
    } catch (error) {
      console.log("got an error trying to check authenticated user:", error)
      setLoggedInUser(null) 
      setUsername(null)
      actions.logout()

    }
    // return a function that specifies any actions on component unmount
    return () => {}
  },[])
  return (
    <Fragment>
      <Helmet>
        <title>FridgeMate</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/preferences/:username" component={Preferences}/>
          <Route exact path="/user/:username/account-settings" component={UserSettings}/>
          <Route exact path="/ingredients/:username/fridge" component={Fridge}/>
          <Route exact path="/recipes/browse" component={BrowseRecipes} />
          <Route exact path="/recipes/:id" component={SingleRecipe} />
          <Route exact path="/recipes/saved-recipes" component={SavedRecipes} />
          <Route exact path="/ingredients/:username/pantry" component={Pantry} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
 
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setModalOpen: (modalId) => {
      store.dispatch({ type: "openModal", payload: modalId });
      console.log("APP JS STORE", store.getState());
    },
    logIn: (username ) =>
      dispatch({ type: "login", payload: username}),
    getToken: ( jwt ) =>
      dispatch({ type: "token", payload:  jwt  }),
    logout: () => dispatch({ type: "logout" }),
   
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


// routes for later

// HOME
// /

// SIGN IN PAGE
// user/login

// REGISTER PAGE
// user/register

// ACCOUNT SETTINGS PAGE
// user/:username/account-settings

// PREFRENCES PAGE
// preferences/:username

// FRIDGE PAGE
// ingredients/:username/fridge

// PANTRY PAGE
// ingredients/:username/pantry

// BROWSE RECIPE PAGE
// /recipes/browse

// SINGLE RECIPE
// /recipes/:recipe-name

// USER SAVED RECIPES
// /saved-recipes/:username

// also You need to add the massive ingredient JSON to your client repo when you do the autocmplete haha. If you pull the latest from server then you can move the file to a data file in the client :)
// https://material-ui.com/components/autocomplete/

// user: {
//   fridgeIngredients: [Array],
//   pantryIngredients: [Array],
//   _id: '5fd0136d3d8569a20f8504b0',
//   name: 'Test User 1',
//   email: 'tester@test.com',
//   username: 'testusername',
//   password: '$2a$10$n7gAww9x3nTlZFYQQ25zHuu4S8ix6U44akrTo7pP5GlqOba6bOWtK',
//   createdDate: '2020-12-08T23:59:41.384Z',
//   lastLogin: '2020-12-08T23:59:41.384Z',
//   __v: 0,
//   profile: 'https://fridgemate.s3.ap-southeast-2.amazonaws.com/1607471981565'
//   }
