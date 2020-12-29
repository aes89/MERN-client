import { connect } from "react-redux";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UserSettings from "./components/userSettings";
import Preferences from "./components/preferences";
import NotFound from "./components/notFound";
import Nav from "./components/nav";
// import "./App.css";
// import Modal from "react-modal";
// import styles from "./components/styles/app.module.css";
// import AuthenticationModal from "./components/AuthenticationModal";
import store from "./index";
import Home from "./components/home";
import Fridge from "./components/fridge";
import Pantry from "./components/pantry";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = ({ actions, userLoggedIn }) => {
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
          {/* link to preferences component */}
          <Route
            exact
            path="/user/:username/preferences"
            component={Preferences}
          />
          <Route
            exact
            path="/user/:username/account-settings"
            component={UserSettings}
          />
          <Route
            exact
            path="/ingredients/:username/fridge"
            component={Fridge}
          />
          <Route exact path="/items/:username/pantry" component={Pantry} />
          {/*
            <Route exact path="/recipes/browse" component={browseRecipes} />
            <Route exact path="/recipes/single-recipe" component={singleRecipe} />
            <Route exact path="/recipes/saved-recipes" component={userSavedRecipe} />
            */}
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
  },
});

export default connect(mapStateToProps)(App);
