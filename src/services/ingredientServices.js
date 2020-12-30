import api from '../config/api'

//FRIDGE

// Returns all Fridge ingredients
export async function getAllFridgeIngredients(username) {
    const response = await api.get("/ingredients/"+username+"/fridge")
    return response.data
}

// Adds a fridge item on the server
export async function addFridgeItem(username,item) {
    const response = await api.post("/ingredients/"+username+"/fridge/new", item)
    return response.data
}

// Deletes a single fridge item on the server
export async function deleteFridgeItem(username,item) {
    const response = await api.delete("/ingredients/"+username+"/fridge/delete", item)
    return response.data
}

// Clears all fridge items from server
export async function deleteAllFridge(username) {
    const response = await api.delete("/ingredients/"+username+"/fridge/clear-all")
    return response.data
}

//PANTRY

// Returns all Pantry ingredients
export async function getAllPantryIngredients(username) {
    const response = await api.get("/ingredients/"+username+"/pantry")
    return response.data
}

// Adds a pantry item on the server
export async function addPantryItem(username,item) {
    const response = await api.post("/ingredients/"+username+"/pantry/new", item)
    return response.data
}

// Deletes a single pantry item on the server
export async function deletePantryItem(username,item) {
    const response = await api.delete("/ingredients/"+username+"/pantry/delete", item)
    return response.data
}

// Clears all pantry items from server
export async function deleteAllPantry(username,item) {
    const response = await api.delete("/ingredients/"+username+"/pantry/clear-all", item)
    return response.data
}




export function getFridge() {
    return localStorage.getItem("fridge")
}


export function setFridge(items) {
    items ? localStorage.setItem("fridge", items) : localStorage.removeItem("fridge")
    console.log("local fridge Updated")
    console.log(items)
}

export function getPantry() {
    return localStorage.getItem("pantry")
}

export function setPantry(user) {
    user ? localStorage.setItem("pantry", user) : localStorage.removeItem("pantry")
    console.log("local pantry Updated")
    console.log(user)
}