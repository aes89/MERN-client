import { createAction, createReducer } from "@reduxjs/toolkit";

const settings = createAction("settings");
const updateProfile = createAction("updateProfile");
const removeProfile = createAction("removeProfile");

const initialState = { username: "Username", email: "Email", profile: null };

//update initial state (null here) to new state, data collected from component.
const currentUserSettings = createReducer(initialState, (builder) => {
  builder.addCase(settings, (state, action) => {
    console.log("hitting start");
    state.username = action.payload.username;   
    state.email = action.payload.email;
    state.profile = action.payload.profile;
    console.log("user settings updated");
    console.log(action.payload);
  });
  builder.addCase(updateProfile, (state, actions) => {
    console.log("hitting this action", actions.payload.profile);
    state.profile = actions.payload.profile;
  });
  builder.addCase(removeProfile, (state) => {
      state.profile = null;
    })
  
});

export default currentUserSettings;
