import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction("login");
const logout = createAction("logout");

const initialState = { username: null };

const userLoggedIn = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
   
      state.username = action.payload.username;
      console.log("state updated for login!");
      console.log(action.payload)
    })
    .addCase(logout, (state) => {
      state.username = null;
    });
});

export default userLoggedIn;
