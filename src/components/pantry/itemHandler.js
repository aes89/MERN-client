// import React, { Fragment } from "react";
// import AutocompleteIngredients from "../ingredientAutocomplete";
// import items from "../../data/pantry.json";
// import api from "../../config/api";

// import {deleteAllPantry, deletePantryItem, addPantryItem } from '../../services/ingredientServices'


// const ItemHandler = () => {
//   const submitPantry = async (values) => {
//     try {
//       //     db path
//       await api.patch(`/:username/pantry/`, values);
//     } catch (error) {
//       console.log("preferences err err", JSON.parse(JSON.stringify(error)));
//       // JSON.parse(JSON.stringify(error)).message;
//     }
//   };

//   const deletePantryItem = (value) =>
//     // <button onClick={() => handleDelete(value)}>X</button>
//     // await api.delete("/:username/fridge")
//     console.log("delete pantry item", value);

//   const emptyPantry = async () =>
//     // await api.delete("/:username/fridge")
//     console.log("emptying pantry");

//   return (
//     <Fragment>
//       <AutocompleteIngredients
//         handleDelete={deletePantryItem}
//         path="pantry"
//         handleSubmit={submitPantry}
//         handleEmpty={emptyPantry}
//         items={items}
//       />
//     </Fragment>
//   );
// };

// export default ItemHandler;
