import { combineReducers } from "redux";

import modalOpen from "./reducers/modals";
import userLoggedIn from "./reducers/login";

export default combineReducers({
  modalOpen,
  userLoggedIn,
  //   authentication: authenticationReducer,
});
