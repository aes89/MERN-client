import { uploadProfileImage, getUsername } from "../../services/authServices";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import styles from "./profile.module.css";
import Loading from "../loading";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileImage = ({ actions, userLoggedIn, currentUserSettings }) => {
  let history = useHistory();
  const [loading, setloading] = useState({ done: true });
  
  const formik = useFormik({
    initialValues: {
      file: "",
    },

    onSubmit: (values) => {
      setloading({ done: false });
      uploadProfileImage(values.file, userLoggedIn)
        .then((image) => {
          const {
            user: { profile },
          } = image;
          console.log("I AM HITTING PROFILE >>>>>>>>>>>>>>>>>>>", profile);
          actions.updateProfile({ profile });
          // history.push("/user/" + getUsername() + "/account-settings");
          toast.success("Profile Picture updated!");
        })
        .catch((error) => {
          toast.error("Oh no!");
          if (error.response && error.response.status === 404)
            formik.setStatus(
              "Sorry we could not submit your request at this time."
            );
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
      setTimeout(() => {
        setloading({ done: true });
      }, 4000);
    },
  });

  return (
    <Fragment>
      <div class={styles.imageUpload}>
        {!loading.done ? (
          <div>
            {" "}
            <Loading />
          </div>
        ) : (
          <form>
            <input
              style={{ backgroundColor: "white" }}
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                console.log("event", event.currentTarget.files[0]);
                formik.setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
            <Button
              size="small"
              type="submit"
              class={styles.imageUploadButton}
              onClick={formik.handleSubmit}
            >
              Upload
            </Button>
          </form>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentUserSettings: state.currentUserSettings.profile,
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateProfile: ({ profile }) => {
      console.log("profile in map dispatch to props", profile);
      return dispatch({ type: "updateProfile", payload: { profile } });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImage);
