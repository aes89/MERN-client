function cov_bm59mqzaq() {
  var path = "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers.js";
  var hash = "8102cc201e9d4141264866c1e2d95d27c8aa88ef";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Adrienne/Desktop/MERN/mern-client/src/reducers.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8102cc201e9d4141264866c1e2d95d27c8aa88ef"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bm59mqzaq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_bm59mqzaq();
import { combineReducers } from "redux";
import modalOpen from "./reducers/modals";
import userLoggedIn from "./reducers/login";
import userPreferences from "./reducers/preferences";
import currentUserSettings from "./reducers/userInfo";
import userIngredients from "./reducers/ingredients";
import recipes from "./reducers/recipes";
import errors from "./reducers/errors";
export default combineReducers({
  modalOpen,
  userPreferences,
  userLoggedIn,
  currentUserSettings,
  recipes,
  userIngredients,
  errors
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm1vZGFsT3BlbiIsInVzZXJMb2dnZWRJbiIsInVzZXJQcmVmZXJlbmNlcyIsImN1cnJlbnRVc2VyU2V0dGluZ3MiLCJ1c2VySW5ncmVkaWVudHMiLCJyZWNpcGVzIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsZUFBVCxRQUFnQyxPQUFoQztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsbUJBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixrQkFBekI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLHdCQUE1QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHFCQUFoQztBQUNBLE9BQU9DLGVBQVAsTUFBNEIsd0JBQTVCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixvQkFBcEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLGVBQWVQLGVBQWUsQ0FBQztBQUM3QkMsRUFBQUEsU0FENkI7QUFFN0JFLEVBQUFBLGVBRjZCO0FBRzdCRCxFQUFBQSxZQUg2QjtBQUk3QkUsRUFBQUEsbUJBSjZCO0FBSzdCRSxFQUFBQSxPQUw2QjtBQU03QkQsRUFBQUEsZUFONkI7QUFPN0JFLEVBQUFBO0FBUDZCLENBQUQsQ0FBOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IG1vZGFsT3BlbiBmcm9tIFwiLi9yZWR1Y2Vycy9tb2RhbHNcIjtcbmltcG9ydCB1c2VyTG9nZ2VkSW4gZnJvbSBcIi4vcmVkdWNlcnMvbG9naW5cIjtcbmltcG9ydCB1c2VyUHJlZmVyZW5jZXMgZnJvbSBcIi4vcmVkdWNlcnMvcHJlZmVyZW5jZXNcIjtcbmltcG9ydCBjdXJyZW50VXNlclNldHRpbmdzIGZyb20gXCIuL3JlZHVjZXJzL3VzZXJJbmZvXCI7XG5pbXBvcnQgdXNlckluZ3JlZGllbnRzIGZyb20gXCIuL3JlZHVjZXJzL2luZ3JlZGllbnRzXCI7XG5pbXBvcnQgcmVjaXBlcyBmcm9tIFwiLi9yZWR1Y2Vycy9yZWNpcGVzXCI7XG5pbXBvcnQgZXJyb3JzIGZyb20gXCIuL3JlZHVjZXJzL2Vycm9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBtb2RhbE9wZW4sXG4gIHVzZXJQcmVmZXJlbmNlcyxcbiAgdXNlckxvZ2dlZEluLFxuICBjdXJyZW50VXNlclNldHRpbmdzLFxuICByZWNpcGVzLFxuICB1c2VySW5ncmVkaWVudHMsXG4gIGVycm9yc1xufSk7XG4iXX0=