import { createAction, createReducer } from "@reduxjs/toolkit";

const register = createAction("register");

const initialState = { username: false };

const userRegistered = createReducer(initialState, (builder) => {
  builder.addCase(register, (state) => {
    console.log("state updated for registered & logged in!");
    state.username = true;
  });
});

export default userRegistered;
