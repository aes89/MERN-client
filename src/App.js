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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
const user = false;

const App = () => {
  var subtitle;
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
          <Login />
          <Register />
        </Fragment>
      )}

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
