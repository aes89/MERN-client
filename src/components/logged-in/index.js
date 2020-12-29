// import React, { Fragment, useEffect } from "react";
// import { connect } from "react-redux";

// import getUserPreferences from "../../utils/get-user-preferences";
// import Preferences from "../preferences";
// import UserSettings from "../userSettings";

// const LoggedIn = ({ actions }) => {
//   // pass empty array on mount, whenever logs in calls getUserPreferences which will be db call
//   // put at higher level so only needs to render data, not also make db call.
//   useEffect(() => {
//     actions.updatePreferences(getUserPreferences());
//   }, []);

//   return (
//     <Fragment>
//       <UserSettings /> <Preferences />
//     </Fragment>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   actions: {
//     updatePreferences: (data) =>
//       dispatch({ type: "updatePreferences", payload: data }),
//   },
// });

// export default connect(null, mapDispatchToProps)(LoggedIn);
