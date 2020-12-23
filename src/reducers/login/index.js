import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const logout = createAction("logout");

const initialState = { username: "" };

const userLoggedIn = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      console.log("state updated for login!");
      //console.log(action.payload)
      state.username = action.payload.username;
    })
    .addCase(logout, (state) => {
      state.username = null;
    });
});

export default userLoggedIn;
