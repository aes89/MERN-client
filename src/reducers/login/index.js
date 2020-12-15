import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const logout = createAction("logout");

const initialState = { username: false };

const userLoggedIn = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.username = true;
      console.log("reducers state", state.username);
    })
    .addCase(logout, (state) => {
      state.username = false;
      console.log("reducers state", state.username);
    });
});

export default userLoggedIn;
