import { createAction, createReducer } from "@reduxjs/toolkit";

const settings = createAction("settings");

const initialState = {username: "Username", email: "Email"} ;

//update initial state (null here) to new state, data collected from component.
const currentUserSettings = createReducer(initialState, (builder) => {
  builder
  .addCase(settings, (state, action) => {
    state.username = action.payload.username;
   state.email = action.payload.email;
    console.log("user settings updated")
    console.log(action.payload)
  });
});

export default currentUserSettings;
