import api from "../config/api";

export async function registerUser(userInfo) {
  // call to server to register user
  const response = await api.post("/user/register", userInfo);
  console.log("Server", response);
  return response.data;
}

export async function loginUser(userInfo) {
  // call to server to login user
  const response = await api.post("/user/login", userInfo);
  console.log("Server", response);
  return response.data;
}

export async function logoutUser() {
  // call to server to logout user
  return api.get("/user/logout");
}

export async function forgotPassword(email) {
  // call to server to login user
  // return user info if successful and error if not
  const response = await api.post("/user/forgot-password", email);
  console.log("Server", response);
  return response.data;
}

export async function resetPassword(token) {
  // call to server to login user
  // return user info if successful and error if not
  const response = await api.get("/user/reset-password", {
        params: {
          resetPasswordToken: token,
        },});
   console.log("Server", response);
  return response.data;
}


export async function updatePasswordViaReset(password) {
  // call to server to login user
  // return user info if successful and error if not
  const response = await api.put("/user/update-password", password);
   console.log("Server", response);
  return response.data;
}



export async function getUserSettings(username) {
  // call to server to register user
  const response = await api.get("/user/"+username+"/account-settings");
   console.log("Server", response);
  return response.data;
}

export async function updateUserSettings(settingInfo, username) {
  // call to server to register user
  const response = await api.patch(
    "/user/"+username+"/account-settings",
    settingInfo
  );
   console.log("Server", response);
  return response.data;
}

export async function uploadProfileImage(image, username) {
  // call to server to register user
  //console.log("image", image);
  try {
    //file from event - axios doesn't read as an object so wrapped in formData
    var formData = new FormData();
    formData.append("image", image);
    console.log("form data", formData);
    const response = await api.post(
      `/user/${username}/add-profile-picture`,
      formData
    );
    console.log("Server", response);
    return response.data;
  } catch (error) {
    console.log("error in image upload", error);
  }
}

export async function getPreference(username) {
  // call to server to register user
  const response = await api.get("/preferences/" + username);
   console.log("Server", response);
  return response.data;
}

export async function updatePreference(userInfo, username) {
  // call to server to register user
  const response = await api.patch(
    "/preferences/"+username+"/edit",
    userInfo
  );
   console.log("Server", response);
  return response.data;
}

//LOCAL STORAGE

//Right now we are saving the token - but as token is in a cookie this does not need to be in local storage- remove later
// Get loggedInUser from localStorage
export function getLoggedInUser() {
  return localStorage.getItem("token");
}

// Store loggedInUser token in local storage
export function setLoggedInUser(token) {
  token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
  console.log("local token Updated");
  console.log(token);
}

// Get loggedInUser from localStorage
export function getUsername() {
  return localStorage.getItem("username");
}

// Store loggedInUser username in local storage
export function setUsername(user) {
  user
    ? localStorage.setItem("username", user)
    : localStorage.removeItem("username");
  console.log("local username Updated");
  console.log(user);
}

// Get profile from localStorage
export function getProfile() {
  return localStorage.getItem("profile");
}

// Store profile  in local storage
export function setProfile(image) {
  image
    ? localStorage.setItem("profile", image)
    : localStorage.removeItem("profile");
  console.log("local profile Updated");
  console.log(image);
}


// Get preferences from localStorage
export function getPref() {
  return localStorage.getItem("preferences");
}

// Store preferences username in local storage
export function setPref(pref) {
  pref
    ? localStorage.setItem("preferences", JSON.stringify(pref))
    : localStorage.removeItem("preferences");
  console.log("local preferences Updated");
  console.log(pref);
}
