import api from '../config/api'


// Returns Recipes to browse
export async function browseSearchRecipes() {
    const response = await api.get("/recipes/browse")
     await setBrowsedRecipes(response.data)
     console.log("Server", response);
    return response.data
}

// Returns all user saved recipes
export async function getAllUserSavedRecipes() {
    const response = await api.get("/recipes/saved-recipes")
    return response.data
}

// Get Single Recipe Page
export async function getSingleRecipePage(recipeId) {
    const response = await api.get("/recipes/"+recipeId)
    //console.log("Server", response);
    return response.data
}

// Add to User Saved Recipes
export async function addNewSavedRecipe(recipe) {
    const response = await api.post("/recipes/add", recipe)
    return response.data
}

// Delete to User Saved Recipes
export async function removedSavedRecipe(recipeId) {
    const response = await api.delete(`/recipes/${recipeId}`);
    return response.data
}


export function getBrowsedRecipes() {
    return localStorage.getItem("browsedRecipes")
}

export function setBrowsedRecipes(items) {
    items ? localStorage.setItem("browsedRecipes", JSON.stringify(items)) : localStorage.removeItem("browsedRecipes")
    console.log("local browsedRecipes Updated")
    //console.log(items)
}

export function getSavedRecipes() {
    return localStorage.getItem("savedRecipes")
}

export function setSavedRecipes(recipe) {
    recipe ? localStorage.setItem("savedRecipes", JSON.stringify(recipe)) : localStorage.removeItem("savedRecipes")
    console.log("local savedRecipes Updated")
    //console.log(recipe)
}


export function getSingleRecipe() {
    return localStorage.getItem("singleRecipe")
}

export function setSingleRecipe(recipe) {
    recipe ? localStorage.setItem("singleRecipe", JSON.stringify(recipe)) : localStorage.removeItem("singleRecipe")
    console.log("local singleRecipe Updated")
    //console.log(recipe)
}
