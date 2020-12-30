import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";


import ingredients from "../../data/ingredients.json"
import {addFridgeItem, addPantryItem, getFridge, setFridge } from '../../services/ingredientServices'
import {getUsername} from '../../services/authServices'


import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

function AutocompleteIngredients({actions, type}) {
  let history = useHistory();
  const [selectedItem, setSelectedItem] = useState(null);
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState(null);


 function handleAddFridge(event) {
   //  event.preventDefault()
   console.log(values)
   const newValues = values.map(i => i.name)
   console.log(newValues.join(", "))   

    addFridgeItem(getUsername(), { item: newValues }).then((r) => {
              console.log(r)
              actions.addToFridge(r.fridgeIngredients)
              history.push("/ingredients/"+getUsername()+"/fridge")
          }).catch((error) => {
            console.log("errors")
            console.log(error.response)
              if (error.response && error.response.status === 401)
              setErrors("Error adding to your Fridge")
              else   
              setErrors("There may be a problem with the server. Please try again after a few moments.")
        })
  };
  

 function handleAddPantry(event) {
   //   event.preventDefault()
   console.log(values)
   const newValues = values.map(i => i.name)
   console.log(newValues.join(", "))   
    addPantryItem(getUsername(), { item: newValues }).then((r) => {
              console.log(r)
              actions.addToPantry(r.fridgeIngredients)
              history.push("/ingredients/"+getUsername()+"/pantry")
          }).catch((error) => {
            console.log("errors")
            console.log(error.response)
              if (error.response && error.response.status === 401)
              setErrors("Error adding to your pantry")
              else   
              setErrors("There may be a problem with the server. Please try again after a few moments.")
        })
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
      <Button variant="outlined" onClick={type=== "fridge" ? handleAddFridge : handleAddPantry}> Add Ingredients</Button>
      </div> 
  );
}



const mapStateToProps = (state) => ({
  fridgeIngredients: state.userIngredients.fridgeIngredients,
  pantryIngredients: state.userIngredients.pantryIngredients,
  error: state.errorsMessages
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addToFridge: ( newIngredients ) =>
      dispatch({ type: "fridgeIngredients", payload: newIngredients }),
    addToPantry: ( newIngredients ) =>
      dispatch({ type: "pantryIngredients", payload: newIngredients }),
    changeError: ( error ) =>
      dispatch({ type: "error", payload: error }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteIngredients);
