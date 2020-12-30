// import React, { Fragment, useState, useEffect  } from "react";
// import AutocompleteIngredients from "../ingredientAutocomplete/index";
// import ingredients from "../../data/ingredients.json";
// import {addFridgeItem,deleteFridgeItem, deleteAllFridge } from '../../services/ingredientServices'
// import {getUsername} from '../../services/authServices'

// const IngredientHandler = () => {

//   const [errors, setErrors] = useState(null);

//   const submitFridge = async (values) => {    
//       addFridgeItem(getUsername(),{ ...values }).then((r) => {
//               console.log(r)
//               actions.addToFridge(r.fridgeIngredients)
//               history.push("/ingredients/"+getUsername()+"/fridge")
//           }).catch((error) => {
//             //console.log("errors")
//             //console.log(error.response)
//               if (error.response && error.response.status === 401)
//               setErrors("Error adding to your Fridge")
//               else   
//               setErrors("There may be a problem with the server. Please try again after a few moments.")
//           })

//   }
//       const deleteFridgeIngredient = (value) =>
//         // <button onClick={() => handleDelete(value)}>X</button>
//         // await api.delete("/:username/fridge")
//         console.log("delete fridge ingredient", value);

// }

// const emptyFridge = async () =>
//         // await api.delete("/:username/fridge")
//         console.log("emptying all fridge");
//          deleteAllFridge(getUsername()).then((r) => {
//               console.log(r)
//               actions.addToFridge(r.user)
//               history.push("/ingredients/"+getUsername()+"/fridge")
//           }).catch((error) => {
//             //console.log("errors")
//             //console.log(error.response)
//               if (error.response && error.response.status === 401)
//               setErrors("Error clearing your Fridge")
//               else   
//               setErrors("There may be a problem with the server. Please try again after a few moments.")
//           })

// }
  


// const mapStateToProps = (state) => ({
//   fridgeIngredients: state.fridgeIngredients,
// });

// const mapDispatchToProps = (dispatch) => ({
//   actions: {
//     addToFridge: ( newIngredients ) =>
//       dispatch({ type: "fridgeIngredients", payload: newIngredients }),
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(IngredientHandler);
