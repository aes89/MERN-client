import { combineReducers } from "redux";

import modalOpen from "./reducers/modals";
import userLoggedIn from "./reducers/login";
import userPreferences from "./reducers/preferences";
import currentUserSettings from "./reducers/userInfo";

export default combineReducers({
  modalOpen,
  userPreferences,
  userLoggedIn,
  currentUserSettings
});
