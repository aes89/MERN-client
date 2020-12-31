import {
  uploadProfileImage,
  //   getUserSettings,
  //   updateUserSettings,
  //   getUsername,
  //   setUsername,
} from "../../services/authServices";
import { Formik, useFormik } from "formik";
import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const ProfileImage = ({ actions, userLoggedIn }) => {
  const formik = useFormik({
    initialValues: {
      file: "",
    },

    onSubmit: (values) => {
      console.log("values", values.file);
      console.log("FILE DETAILS", {
        fileName: values.file.name,
        type: values.file.type,
        size: `${values.file.size} bytes`,
      });
      uploadProfileImage({ ...values }, userLoggedIn)
        .then((image) => {
          console.log("IMAGE??", image);
          actions.uploadImage({ ...image });
        })
        .catch((error) => {
          //console.log("errors")
          //console.log(error.response)
          if (error.response && error.response.status === 404)
            formik.setStatus("Error getting user information ");
          else
            formik.setStatus(
              "There may be a problem with the server. Please try again after a few moments."
            );
        });
    },
  });

  return (
    <Fragment>
      <form>
        <input
          id="file"
          name="file"
          type="file"
          onChange={(event) => {
            console.log("event", event.currentTarget.files[0]);
            formik.setFieldValue("file", event.currentTarget.files[0]);
          }}
          //not sure what this does
          // https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
        />
        <Button type="submit" onClick={formik.handleSubmit}>
          Upload
        </Button>
      </form>
    </Fragment>
  );
};

// export default ProfileImage;

// profile picture upload what it does is upload the image to s3 then returns a URL which gets saved to Db (user) as a string
// New
// It does all that via the post request
// So it doesn’t need to be connected to user settings form really since it will update the user Db itself

const mapStateToProps = (state) => ({
  //   currentUserSettings: state.currentUserSettings,
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    uploadImage: ({ file }) => dispatch({ type: "image", payload: { file } }),
    // uploadImage: (image) => dispatch({ type: "uploadImage", payload: image }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImage);
