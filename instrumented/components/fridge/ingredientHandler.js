// import React, { Fragment } from "react";
// import AutocompleteIngredients from "../ingredientAutocomplete/index";
// import ingredients from "../../data/ingredients.json";
// import api from "../../config/api";
// const IngredientHandler = () => {
//   const submitFridge = async (values) => {
//     try {
//       //     db path
//       await api.patch(`/:username/fridge/`, values);
//     } catch (error) {
//       console.log("preferences err err", JSON.parse(JSON.stringify(error)));
//       // JSON.parse(JSON.stringify(error)).message;
//     }
//   };
//   const deleteFridgeIngredient = (value) =>
//     // <button onClick={() => handleDelete(value)}>X</button>
//     // await api.delete("/:username/fridge")
//     console.log("delete fridge ingredient", value);
//   const emptyFridge = async () =>
//     // await api.delete("/:username/fridge")
//     console.log("emptying fridge");
//   return (
//     <Fragment>
//       <AutocompleteIngredients
//         handleDelete={deleteFridgeIngredient}
//         path="fridge"
//         handleSubmit={submitFridge}
//         handleEmpty={emptyFridge}
//         items={ingredients}
//       />
//     </Fragment>
//   );
// };
// export default IngredientHandler;

function cov_1r96yemcw4() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/components/fridge/ingredientHandler.js";
  var hash = "ce34a74275b1238a86a6edcf3450419fa1dbf512";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/components/fridge/ingredientHandler.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ce34a74275b1238a86a6edcf3450419fa1dbf512"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1r96yemcw4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1r96yemcw4();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnRIYW5kbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZCWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEF1dG9jb21wbGV0ZUluZ3JlZGllbnRzIGZyb20gXCIuLi9pbmdyZWRpZW50QXV0b2NvbXBsZXRlL2luZGV4XCI7XG4vLyBpbXBvcnQgaW5ncmVkaWVudHMgZnJvbSBcIi4uLy4uL2RhdGEvaW5ncmVkaWVudHMuanNvblwiO1xuLy8gaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vY29uZmlnL2FwaVwiO1xuXG4vLyBjb25zdCBJbmdyZWRpZW50SGFuZGxlciA9ICgpID0+IHtcbi8vICAgY29uc3Qgc3VibWl0RnJpZGdlID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICAvLyAgICAgZGIgcGF0aFxuLy8gICAgICAgYXdhaXQgYXBpLnBhdGNoKGAvOnVzZXJuYW1lL2ZyaWRnZS9gLCB2YWx1ZXMpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInByZWZlcmVuY2VzIGVyciBlcnJcIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcbi8vICAgICAgIC8vIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKS5tZXNzYWdlO1xuLy8gICAgIH1cbi8vICAgfTtcblxuLy8gICBjb25zdCBkZWxldGVGcmlkZ2VJbmdyZWRpZW50ID0gKHZhbHVlKSA9PlxuLy8gICAgIC8vIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHZhbHVlKX0+WDwvYnV0dG9uPlxuLy8gICAgIC8vIGF3YWl0IGFwaS5kZWxldGUoXCIvOnVzZXJuYW1lL2ZyaWRnZVwiKVxuLy8gICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIGZyaWRnZSBpbmdyZWRpZW50XCIsIHZhbHVlKTtcblxuLy8gICBjb25zdCBlbXB0eUZyaWRnZSA9IGFzeW5jICgpID0+XG4vLyAgICAgLy8gYXdhaXQgYXBpLmRlbGV0ZShcIi86dXNlcm5hbWUvZnJpZGdlXCIpXG4vLyAgICAgY29uc29sZS5sb2coXCJlbXB0eWluZyBmcmlkZ2VcIik7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8RnJhZ21lbnQ+XG4vLyAgICAgICA8QXV0b2NvbXBsZXRlSW5ncmVkaWVudHNcbi8vICAgICAgICAgaGFuZGxlRGVsZXRlPXtkZWxldGVGcmlkZ2VJbmdyZWRpZW50fVxuLy8gICAgICAgICBwYXRoPVwiZnJpZGdlXCJcbi8vICAgICAgICAgaGFuZGxlU3VibWl0PXtzdWJtaXRGcmlkZ2V9XG4vLyAgICAgICAgIGhhbmRsZUVtcHR5PXtlbXB0eUZyaWRnZX1cbi8vICAgICAgICAgaXRlbXM9e2luZ3JlZGllbnRzfVxuLy8gICAgICAgLz5cbi8vICAgICA8L0ZyYWdtZW50PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudEhhbmRsZXI7Il19