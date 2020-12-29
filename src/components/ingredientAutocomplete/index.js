import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";

export default function AutocompleteIngredients({
  handleDelete,
  handleSubmit,
  handleEmpty,
  items,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [values, setValues] = useState([]);

  // item taken from list and put into array "values"
  const handleAdd = () => {
    if (!values.includes(selectedItem)) {
      setValues([...values, selectedItem]);
    }
    console.log("values", values);
  };

  //async try/catch tried to delete from DB then if successful, will remove from state. catch = doesn't remove
  // send network request with parameters

  return (
    // autocomplete list
    <div style={{ marginLeft: "100px", marginTop: "100px", width: 300 }}>
      <Autocomplete
        ingredientAutocomplete
        id="ingredient-autocomplete"
        disableClearable
        getOptionLabel={(option) => option.name}
        options={items.map((option) => option.name)}
        renderInput={(params) => {
          setSelectedItem(params.inputProps.value);
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
      <button onClick={handleAdd}>Add</button>

      {values &&
        values.map((value) => (
          <div>
            {value}{" "}
            <button
              onClick={() => {
                try {
                  handleDelete(value);
                  setValues([...values.filter((val) => val !== value)]);
                } catch (error) {
                  console.log("delete error");
                }
              }}
            >
              {" "}
              X
            </button>
          </div>
        ))}

      <button onClick={() => handleSubmit(values)}>Save your selections</button>

      <button
        onClick={() => {
          try {
            handleEmpty(values);
            setValues([]);
          } catch (err) {
            console.log("err", err);
          }
        }}
      >
        Empty Fridge
      </button>
    </div>
  );
}
