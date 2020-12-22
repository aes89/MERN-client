import { createAction, createReducer } from "@reduxjs/toolkit";

const updatePreferences = createAction("updatePreferences");

const initialState = { preferences: null };

const userPreferences = createReducer(initialState, (builder) => {
  builder.addCase(updatePreferences, (state, action) => {
    state.preferences = action.payload;
  });
});

export default userPreferences;
