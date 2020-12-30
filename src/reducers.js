import { combineReducers } from "redux";

import modalOpen from "./reducers/modals";
import userLoggedIn from "./reducers/login";
import userPreferences from "./reducers/preferences";
import currentUserSettings from "./reducers/userInfo";
import userIngredients from "./reducers/ingredients";
import recipes from "./reducers/recipes";
import errors from "./reducers/errors";

export default combineReducers({
  modalOpen,
  userPreferences,
  userLoggedIn,
  currentUserSettings,
  recipes,
  userIngredients,
  errors
});
