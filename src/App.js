import { connect } from "react-redux";
import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getUsername, setUsername } from "./services/authServices";

import { ToastContainer } from "react-toastify";

import UserSettings from "./components/userSettings";
import Preferences from "./components/preferences";
import BrowseRecipes from "./components/browseRecipes";
import SavedRecipes from "./components/savedRecipes";
import SingleRecipe from "./components/singleRecipe";
import ResetPassword from "./components/resetPassword";
import NotFound from "./components/notFound";
import Nav from "./components/nav";
import Home from "./components/home";
import Fridge from "./components/fridge";
import Pantry from "./components/pantry";
import Footer from "./components/footer";

import CssBaseline from "@material-ui/core/CssBaseline";

//NOTE TO CHANGE THE BELOW ROUTES BACK TO PRIVATE ROUTE AFTER ALL CODE IS DONE
//MAYBE ADD TOAST NOTIFCATION BELOW?
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = getUsername();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const App = ({ actions }) => {
  useEffect(() => {
    try {
      actions.logIn(getUsername());
    } catch (error) {
      setUsername();
      actions.logout();
    }
    // return a function that specifies any actions on component unmount
    return () => {};
  }, []);

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
          <PrivateRoute
            exact
            path="/preferences/:username"
            component={Preferences}
          />
          <PrivateRoute
            exact
            path="/user/:username/account-settings"
            component={UserSettings}
          />
          <PrivateRoute
            exact
            path="/ingredients/:username/fridge"
            component={Fridge}
          />
          <PrivateRoute
            exact
            path="/recipes/browse"
            component={BrowseRecipes}
          />
          <PrivateRoute
            exact
            path="/recipes/:id/recipe"
            component={SingleRecipe}
          />
          <PrivateRoute
            exact
            path="/recipes/saved-recipes"
            component={SavedRecipes}
          />
          <PrivateRoute
            exact
            path="/ingredients/:username/pantry"
            component={Pantry}
          />
          <Route
            exact
            path="/user/reset-password/:token"
            component={ResetPassword}
          />
          <Route component={NotFound} />
        </Switch>
        <ToastContainer />
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logIn: (username) => dispatch({ type: "login", payload: username }),
    getToken: (jwt) => dispatch({ type: "token", payload: jwt }),
    logout: () => dispatch({ type: "logout" }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App as AppForTest };
