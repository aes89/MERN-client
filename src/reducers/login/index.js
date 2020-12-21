import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const logout = createAction("logout");

const initialState = { username: false };

const userLoggedIn = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      console.log("state updated for login!");
      state.username = true;
    })
    .addCase(logout, (state) => {
      state.username = false;
    });
});

export default userLoggedIn;
