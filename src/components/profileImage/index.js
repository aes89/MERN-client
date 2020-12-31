import { uploadProfileImage } from "../../services/authServices";
import { Formik, useFormik } from "formik";

const ProfileImage = () => {
  console.log("profile image");

  const formik = useFormik({
    initialValues: {
      image: ""
    },

  return (
    <input
      id="file"
      name="file"
      type="file"
      onChange={(event) => {
        formik.setFieldValue("file", event.currentTarget.files[0]);
      }}
      //not sure what this does
      // https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
      onSubmit={(values) => {
        console.log({
          fileName: values.file.username,
          type: values.file.type,
          size: `${values.file.size} bytes`,
        });
      }}
    />
  );
};

export default ProfileImage;
