import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import ingredients from "../../data/ingredients.json"



export default function AutocompleteIngredients() {


    return (
      <div style={{ width: 300 }}>
       
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={ingredients.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add Ingredient"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </div>
    );
  }