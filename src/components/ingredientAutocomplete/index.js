import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import ingredients from "../../data/ingredients.json";
import { useFormik } from "formik";

export default function AutocompleteIngredients() {
  const formik = useFormik({
    initialValues: {
      ingredient: "",
    },
    //will need to validate?
  });
  const [value, setValue] = useState(null);
  useEffect(() => {
    console.log("useEffect", value);
  });
  //useEffect, when value not null/empty then add to local
  console.log("value", value);

  return (
    <div style={{ width: 300 }}>
      <form onSubmit={formik.handleSubmit}>
        <Autocomplete
          ingredientAutocomplete
          id="ingredient-autocomplete"
          disableClearable
          options={ingredients.map((option) => option.name)}
          renderInput={(params) => {
            setValue(params.inputProps.value);
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
      </form>
    </div>
  );
}
