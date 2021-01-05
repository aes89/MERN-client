// import React from "react";
// import { connect } from "react-redux";
// import { useFormik } from "formik";
// import Fade from 'react-reveal/Fade';
// import styles from "../styles/loginSignup.module.css";
// import { useHistory } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import notify from "../../utils/notifications.js";
// import Button from "@material-ui/core/Button";


// const AreYouSure = ({ actions, loggedIn,modalId}) => {
//   let history = useHistory();

//   const text = {
//       color: 'red',
//     }; 

//    function handleClose () {
//         actions.closeModal() 
//         history.push("/")
//         //notify()
//     }

//   return (
//     <div class={styles.loginSignupBox}>
//       <h1>Login</h1>
//       <form onSubmit={formik.handleSubmit}>
//          <div>
//           <Button variant="contained" className={styles.modalButton} onClick={() => actions.openModal("register")}>
//               Yes
//             </Button>
//             <Button variant="contained" className={styles.modalCancelButton} onClick={actions.closeModal}>
//               Cancel
//             </Button>
//           </div>
//       </form>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   loggedIn: state.userLoggedIn.username,
//  modalId: state.modalOpen.modal,
// });

// const mapDispatchToProps = (dispatch) => ({
//   actions: {
//     openModal: (modalId) => dispatch({ type: "openModal", payload: modalId }),
//      closeModal: () => dispatch({ type: "closeModal" }),
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AreYouSure);
