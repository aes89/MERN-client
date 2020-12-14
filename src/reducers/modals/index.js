import { createAction, createReducer } from "@reduxjs/toolkit";

const openModal = createAction("openModal");
const closeModal = createAction("closeModal");

const initialState = { modal: null };

const modalOpen = createReducer(initialState, (builder) => {
  //   name: "authenticated",
  builder
    .addCase(openModal, (state, action) => {
      state.modal = action.payload;
    })
    .addCase(closeModal, (state) => {
      state.modal = null;
    });
});

export default modalOpen;
