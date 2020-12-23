import api from '../config/api'



export async function registerUser(userInfo) {
    // call to server to register user
    const response = await api.post("/user/register", userInfo)
    console.log("got user back from server", response)
    return response.data
}