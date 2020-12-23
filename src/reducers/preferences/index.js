import { createAction, createReducer } from "@reduxjs/toolkit";

const updatePreferences = createAction("updatePreferences");

const initialState = { preferences: null };

//update initial state (null here) to new state, data collected from component.
const userPreferences = createReducer(initialState, (builder) => {
  builder.addCase(updatePreferences, (state, action) => {
    state.preferences = action.payload;
  });
});

export default userPreferences;
