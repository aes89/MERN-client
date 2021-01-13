// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//   // reducer: {
//   //   login: combineLogInReducers,
//   // },
// });

// I don't think this was actually doing anything but I'm not ready to delete it :P

import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
