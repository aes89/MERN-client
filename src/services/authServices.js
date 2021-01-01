import api from "../config/api";

export async function registerUser(userInfo) {
  // call to server to register user
  const response = await api.post("/user/register", userInfo);
  console.log("got user back from server", response);
  return response.data;
}

export async function loginUser(userInfo) {
  // call to server to login user
  // return user info if successful and error if not
  const response = await api.post("/user/login", userInfo);
  console.log("got user back from server", response);
  // console.log(response)
  return response.data;
}

export async function logoutUser() {
  // call to server to logout user
  return api.get("/user/logout");
}

export async function getUserSettings(username) {
  // call to server to register user
  const response = await api.get("/user/" + username + "/account-settings");
  console.log("got user back from server", response);
  return response.data;
}

export async function updateUserSettings(settingInfo, username) {
  // call to server to register user
  const response = await api.patch(
    "/user/" + username + "/account-settings",
    settingInfo
  );
  console.log("got user back from server", response);
  return response.data;
}

export async function uploadProfileImage(image, username) {
  // call to server to register user
  console.log("image", image);
  try {
    //file from event - axios doesn't read as an object so wrapped in formData
    var formData = new FormData();
    formData.append("image", image);
    console.log("form data", formData);
    const response = await api.post(
      `/user/${username}/add-profile-picture`,
      formData
    );
    console.log("hello?");
    console.log("got user image from server", response);
    return response.data;
  } catch (error) {
    console.log("error in image upload", error);
  }
}

export async function getPreference(username) {
  // call to server to register user
  const response = await api.get("/preferences/" + username);
  console.log("got user back from server", response);
  return response.data;
}

export async function updatePreference(userInfo, username) {
  // call to server to register user
  const response = await api.post(
    "/preferences/" + username + "/edit",
    userInfo
  );
  console.log("got user back from server", response);
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
