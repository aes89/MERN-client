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

function cov_2cgydv54l2() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/components/pantry/itemHandler.js";
  var hash = "9b67ecdbd4170e7275cf146f797a2193c1cfe2da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/components/pantry/itemHandler.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9b67ecdbd4170e7275cf146f797a2193c1cfe2da"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2cgydv54l2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2cgydv54l2();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1IYW5kbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUJZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQXV0b2NvbXBsZXRlSW5ncmVkaWVudHMgZnJvbSBcIi4uL2luZ3JlZGllbnRBdXRvY29tcGxldGVcIjtcbi8vIGltcG9ydCBpdGVtcyBmcm9tIFwiLi4vLi4vZGF0YS9wYW50cnkuanNvblwiO1xuLy8gaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vY29uZmlnL2FwaVwiO1xuXG4vLyBpbXBvcnQge2RlbGV0ZUFsbFBhbnRyeSwgZGVsZXRlUGFudHJ5SXRlbSwgYWRkUGFudHJ5SXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZ3JlZGllbnRTZXJ2aWNlcydcblxuXG4vLyBjb25zdCBJdGVtSGFuZGxlciA9ICgpID0+IHtcbi8vICAgY29uc3Qgc3VibWl0UGFudHJ5ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICAvLyAgICAgZGIgcGF0aFxuLy8gICAgICAgYXdhaXQgYXBpLnBhdGNoKGAvOnVzZXJuYW1lL3BhbnRyeS9gLCB2YWx1ZXMpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInByZWZlcmVuY2VzIGVyciBlcnJcIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcbi8vICAgICAgIC8vIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKS5tZXNzYWdlO1xuLy8gICAgIH1cbi8vICAgfTtcblxuLy8gICBjb25zdCBkZWxldGVQYW50cnlJdGVtID0gKHZhbHVlKSA9PlxuLy8gICAgIC8vIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHZhbHVlKX0+WDwvYnV0dG9uPlxuLy8gICAgIC8vIGF3YWl0IGFwaS5kZWxldGUoXCIvOnVzZXJuYW1lL2ZyaWRnZVwiKVxuLy8gICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIHBhbnRyeSBpdGVtXCIsIHZhbHVlKTtcblxuLy8gICBjb25zdCBlbXB0eVBhbnRyeSA9IGFzeW5jICgpID0+XG4vLyAgICAgLy8gYXdhaXQgYXBpLmRlbGV0ZShcIi86dXNlcm5hbWUvZnJpZGdlXCIpXG4vLyAgICAgY29uc29sZS5sb2coXCJlbXB0eWluZyBwYW50cnlcIik7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8RnJhZ21lbnQ+XG4vLyAgICAgICA8QXV0b2NvbXBsZXRlSW5ncmVkaWVudHNcbi8vICAgICAgICAgaGFuZGxlRGVsZXRlPXtkZWxldGVQYW50cnlJdGVtfVxuLy8gICAgICAgICBwYXRoPVwicGFudHJ5XCJcbi8vICAgICAgICAgaGFuZGxlU3VibWl0PXtzdWJtaXRQYW50cnl9XG4vLyAgICAgICAgIGhhbmRsZUVtcHR5PXtlbXB0eVBhbnRyeX1cbi8vICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuLy8gICAgICAgLz5cbi8vICAgICA8L0ZyYWdtZW50PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSXRlbUhhbmRsZXI7XG4iXX0=