import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const logout = createAction("logout");

const initialState = { username: false };

const userLoggedIn = createReducer(initialState, (builder) => {
  //   name: "authenticated",
  builder
    .addCase(login, (state) => {
      state.username = true;
    })
    .addCase(logout, (state) => {
      state.username = false;
    });
});

export default userLoggedIn;
