import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const token = createAction("token");
const updateUsername = createAction("updateUsername");
const logout = createAction("logout");

const initialState = { username: null, jwt: null };

const userLoggedIn = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.username = action.payload;
    })
    .addCase(token, (state, action) => {
      state.jwt = action.payload;
    })
    .addCase(logout, (state) => {
      state.username = null;
      state.jwt = null;
      state.profile = null;
    })
    .addCase(updateUsername, (state, action) => {
      state.username = action.payload;
    });
});

export default userLoggedIn;
