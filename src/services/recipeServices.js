import api from '../config/api'


// Returns Recipes to browse
export async function browseSearchRecipes() {
    const response = await api.get("/recipes/browse")
     await setBrowsedRecipes(response.data)
    console.log("server check", response.data)
    //console.log("length check", response.data.length)
  
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
    return response.data
}

// Add to User Saved Recipes
export async function addNewSavedRecipe(recipe) {
    const response = await api.post("/recipes/add", recipe)
    return response.data
}

// Delete to User Saved Recipes
export async function removedSavedRecipe(recipeId) {
    const response = await api.delete(`/recipes/${recipeId}`)
    return response.data
}




export function getBrowsedRecipes() {
    return localStorage.getItem("browsedRecipes")
}

export function setBrowsedRecipes(items) {
    items ? localStorage.setItem("browsedRecipes", JSON.stringify(items)) : localStorage.removeItem("browsedRecipes")
    console.log("local browsedRecipes Updated")
    console.log(items)
}
