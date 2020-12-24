import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const token = createAction("token");
const logout = createAction("logout");

const initialState = { username: null, jwt: null };

const userLoggedIn = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.username = action.payload;
      console.log("state updated for login!");
      console.log(action.payload)
    })
    .addCase(token, (state, action) => {
      state.jwt = action.payload;
      console.log("jwt state updated");
      console.log(action.payload)
    })
    .addCase(logout, (state) => {
      state.username = null;
    });
});

export default userLoggedIn;
