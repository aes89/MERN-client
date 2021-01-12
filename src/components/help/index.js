import React,{useState} from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";

import styles from "../styles/modals.module.css";
// import store from "../../index";
import {
  forgotPassword,
} from "../../services/authServices";
import { useHistory } from "react-router-dom";


import Button from "@material-ui/core/Button";
import LockIcon from '@material-ui/icons/Lock';
import Fade from 'react-reveal/Fade';
import Loading from "../loading";
import HelpIcon from '@material-ui/icons/Help';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Help = ({actions,  modalId }) => {
  

  return (
    <div class={styles.loginSignupBox}>
          <h1>Help</h1>
            <div style={{alignSelf: "center"}}>
            <HelpIcon/>
            </div>
                  <Button
                    class={styles.modalCancelButton}
                    onClick={() => actions.closeModal("help")}>
                    Back
                  </Button>
        
            <div style={{alignSelf: "left"}}>
                 Help info
            </div>
    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Help);
