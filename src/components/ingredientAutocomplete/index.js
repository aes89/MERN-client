import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";



import ingredients from "../../data/ingredients.json"


export default function AutocompleteIngredients({
  handleDelete,
  handleSubmit,
  handleEmpty,
  items,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [values, setValues] = useState([]);

  // // item taken from list and put into array "values"
  // const handleAdd = () => {
  //   if (!values.includes(selectedItem)) {
  //     setValues([...values, selectedItem]);
  //   }
  //   console.log("values", values);
  // };

  const handleAdd = () => {
   console.log(values)
  };


 return (
   // autocomplete list
   <div style={{ width: 300, padding: 20 }}> 
      <Autocomplete
        multiple
        id="tags-standard"
        options={ingredients}
        getOptionLabel={(option) => option.name}
        defaultValue={[ingredients[3]]}
        onChange={(event, value) => setValues(value)}
        renderInput={(params) => {
        //setSelectedItem(params.inputProps.value);
              return (
                <TextField
                {...params}
                variant="standard"
                label="Add Ingredients"
                placeholder="Ingredients"/>
              );
        }}
      />

      <button onClick={handleAdd}>Add Ingredients</button>

    </div>
  );
}