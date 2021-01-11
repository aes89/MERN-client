import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Login from "../login";
import Register from "../register";

const AuthenticationModal = ({ actions, modalId }) => {
  const { closeModal } = actions;

  const logInRegisterModals = {
    register: <Register />,
    login: <Login />,
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#EAEBF1",
    },
  };

  return (
    <Modal
      isOpen={typeof modalId === "string"}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Log In"
    >
      {modalId && logInRegisterModals[modalId]}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  modalId: state.modalOpen.modal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
    closeModal: () => dispatch({ type: "closeModal" }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationModal);

export { mapStateToProps, mapDispatchToProps };
