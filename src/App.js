import { connect } from "react-redux";
import React, { Fragment } from "react";
import Login from "./components/login";
import Register from "./components/register";
import UserSettings from "./components/userSettings";
import Preferences from "./components/preferences";
import SearchRecipeButton from "./components/resuables/searchButton";
import Nav from "./components/nav";
import "./App.css";
import Modal from "react-modal";
import styles from "./components/styles/app.module.css";


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
// const user = false;

const App = ({ userLoggedIn }) => {
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
    <div className={styles.homeLayoutOnly}>
           <Nav />
          <main className={` ${styles.homeContent}`}>
              <div className={styles.homeBox}>
                  <p>Random Food Jokes API</p>
                  <h1>What is in your fridge?</h1>
                  <h3>Just add your ingredients and FridgeMate will help find recipes personlised to you!</h3>
                  <SearchRecipeButton/>
                  <h4>
                    {userLoggedIn ? "you are logged in" : "please log in you loser"}
                  </h4>
                  <div>
                      {userLoggedIn ? (
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
                    class="modalLoginButton"
                    onClick={() => {
                      setModalOpen("login");
                      openModal();
                    }}
                  >
                    Login
                  </button>
                  <button
                    class="modalRegisterButton"
                    onClick={() => {
                      setModalOpen("register");
                      openModal();
                    }}
                  >
                    Register
                  </button>
                  <button
                    class="modalCancelButton"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Cancel
                  </button>
                </Modal>
              </div>
          
              </div>
     
         </main>



      
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
});

export default connect(mapStateToProps)(App);

// routes for later

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

// also You need to add the massive ingredient JSON to your client repo when you do the autocmplete haha. If you pull the latest from server then you can move the file to a data file in the client :)
// https://material-ui.com/components/autocomplete/

// user: {
//   fridgeIngredients: [Array],
//   pantryIngredients: [Array],
//   _id: '5fd0136d3d8569a20f8504b0',
//   name: 'Test User 1',
//   email: 'tester@test.com',
//   username: 'testusername',
//   password: '$2a$10$n7gAww9x3nTlZFYQQ25zHuu4S8ix6U44akrTo7pP5GlqOba6bOWtK',
//   createdDate: '2020-12-08T23:59:41.384Z',
//   lastLogin: '2020-12-08T23:59:41.384Z',
//   __v: 0,
//   profile: 'https://fridgemate.s3.ap-southeast-2.amazonaws.com/1607471981565'
//   }
