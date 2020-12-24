import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import ingredients from "../../data/ingredients.json";
import { Field, Formik, useFormik } from "formik";

export default function AutocompleteIngredients() {
  const formik = useFormik({
    initialValues: {
      ingredient: "",
    },
    //will need to validate?
  });
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [values, setValues] = useState([]);
  // useEffect(() => {
  const handleClick = () => {
    if (!values.includes(selectedIngredient)) {
      setValues([...values, selectedIngredient]);
    }
  };
  console.log("values", values);
  //useEffect, when value not null/empty then add to local

  return (
    <div style={{ marginLeft: "100px", marginTop: "100px", width: 300 }}>
      <Autocomplete
        ingredientAutocomplete
        id="ingredient-autocomplete"
        disableClearable
        options={ingredients.map((option) => option.name)}
        renderInput={(params) => {
          console.log("params", params.inputProps.value);
          setSelectedIngredient(params.inputProps.value);
          return (
            <TextField
              {...params}
              label="Add Ingredient"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          );
        }}
      />
      <button onClick={handleClick}>Add</button>
      {/* <ul>
      {value.map((value) => (
        <li key={value}>{value}</li>
      ))}
      ;
    </ul> */}
    </div>
  );
}
