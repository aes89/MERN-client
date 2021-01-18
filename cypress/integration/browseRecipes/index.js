import logIn from "../../fixtures/logInSequence";

describe("Browse Recipes", () => {
  it("Pass: Loads browse page", () => {
    cy.logIn();
    cy.visit("http://localhost:3000/recipes/browse");
    cy.wait(5000);
    cy.contains("Browse Recipes");
  });

  it("Pass: Should suggest recipes when no ingredients or preferences to search with", function () {
    cy.logIn();
    cy.visit("http://localhost:3000/recipes/browse");
    cy.wait(5000);
    cy.contains(
      "You have no ingredients in your fridge, so here are some recipe ideas!"
    );
  });

  //   needs to be a unit test maybe
  //   it("Pass: Should suggest recipes when ingredients and preferences are saved", function () {
  //     cy.logIn();
  //     cy.setLocalStorage({
  //       modalOpen: {
  //         modal: null,
  //       },
  //       userPreferences: {
  //         vegetarian: true,
  //         vegan: false,
  //         glutenFree: false,
  //         dairyFree: false,
  //         veryHealthy: false,
  //         cheap: false,
  //         veryPopular: false,
  //         sustainable: false,
  //       },
  //       userLoggedIn: {
  //         username: "Testuser",
  //         jwt: null,
  //       },
  //       currentUserSettings: {
  //         username: "Username",
  //         email: "Email",
  //         profile: null,
  //       },
  //       recipes: {
  //         browseRecipes: null,
  //         savedRecipes: null,
  //         singleRecipe: null,
  //       },
  //       userIngredients: {
  //         fridgeIngredients: ["egg"],
  //         pantryIngredients: ["salt"],
  //       },
  //       errors: {
  //         error: null,
  //       },
  //     });
  //     cy.visit("http://localhost:3000/recipes/browse");
  //     cy.setLocalStorage();

  //     cy.wait(5000);
  //   });
});
