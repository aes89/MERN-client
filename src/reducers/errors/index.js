import { createAction, createReducer } from "@reduxjs/toolkit";

const error = createAction("error");

const initialState = { error: null};

const errorsMessages = createReducer(initialState, (builder) => {
  builder
    .addCase(error, (state, action) => {
      state.error = action.payload;
      console.log("state updated for error!");
      console.log(action.payload)
    })
});

export default errorsMessages;
