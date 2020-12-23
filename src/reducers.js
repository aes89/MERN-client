import { combineReducers } from "redux";

import modalOpen from "./reducers/modals";
import userLoggedIn from "./reducers/login";
import userPreferences from "./reducers/preferences";

export default combineReducers({
  modalOpen,
  userPreferences,
  userLoggedIn,
});
