import { combineReducers } from "redux";

import userLoggedIn from "./reducers/login";

export default combineReducers({
  userLoggedIn,
  //   authentication: authenticationReducer,
});
