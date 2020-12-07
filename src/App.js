import React, { Fragment } from "react";
import Login from "./components/login";
import Register from "./components/register";
import UserSettings from "./components/userSettings";
import Preferences from "./components/preferences";
import "./App.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const user = true;

const App = () => {
  const modals = {
    register: <Register />,
    login: <Login />,
  };
  const [modalOpen, setModalOpen] = React.useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <div>
        <h1>FridgeMate</h1>
      </div>
      {user ? (
        <Fragment>
          <UserSettings /> <Preferences />
        </Fragment>
      ) : (
        <Fragment>
          <button
            onClick={() => {
              setModalOpen("login");
              openModal();
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setModalOpen("register");
              openModal();
            }}
          >
            Register
          </button>
        </Fragment>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        {modalOpen && modals[modalOpen]}
        <button
          onClick={() => {
            setModalOpen("login");
            openModal();
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setModalOpen("register");
            openModal();
          }}
        >
          <button
            onClick={() => {
              // setModalOpen("register");
              closeModal();
            }}
          ></button>
          Register
        </button>
      </Modal>
    </div>
  );
};

export default App;

// routes for laters

// HOME
// /

// SIGN IN PAGE
// user/login

// REGISTER PAGE
// user/register

// ACCOUNT SETTINGS PAGE
// user/:username/account-settings

// PREFRENCES PAGE
// preferences/:username

// FRIDGE PAGE
// ingredients/:username/fridge

// PANTRY PAGE
// ingredients/:username/pantry

// BROWSE RECIPE PAGE
// /recipes/browse

// SINGLE RECIPE
// /recipes/:recipe-name

// USER SAVED RECIPES
// /saved-recipes/:username
