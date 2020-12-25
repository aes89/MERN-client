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
import Footer from "./components/footer";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = ({ actions }) => {

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
      <Footer/>
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

