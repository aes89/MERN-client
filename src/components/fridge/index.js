import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import styles from "../styles/loginSignup.module.css";
import api from "../../config/api";
import AutocompleteIngredients from "../ingredientAutocomplete";
import Logo from "../logo";

import Container from '@material-ui/core/Container';

const Fridge = () => {
  return <div>
     <Container maxWidth="sm">
        <Logo />It's a fridge!
        <AutocompleteIngredients />
        </Container>
        </div>;
};

export default Fridge;
