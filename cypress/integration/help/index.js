import logIn from "../../fixtures/logInSequence";

describe("Help modal", () => {
  //   logs in
  it("Pass: Opens Help modal from home page when logged in", () => {
    cy.logIn();
    cy.get(".MuiButtonBase-root").click();
  });

  it("Pass: Opens and closes Help modal from home page when not logged in", () => {
    cy.visit("localhost:3000");
    cy.get(".MuiButtonBase-root").click({ force: true });
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", {
        modalOpen: {
          modal: "help",
        },
        userPreferences: {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
        },
        userLoggedIn: {
          username: null,
          jwt: null,
        },
        currentUserSettings: {
          username: "Username",
          email: "Email",
          profile: null,
        },
        recipes: {
          browseRecipes: null,
          savedRecipes: null,
          singleRecipe: null,
        },
        userIngredients: {
          fridgeIngredients: [],
          pantryIngredients: [],
        },
        errors: {
          error: null,
        },
      });
    cy.contains("Back");
    cy.contains("How to I add ingredients to my Fridge?");
    cy.contains("Back").click();
    cy.contains("FridgeMate");
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", {
        modalOpen: {
          modal: null,
        },
        userPreferences: {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
        },
        userLoggedIn: {
          username: null,
          jwt: null,
        },
        currentUserSettings: {
          username: "Username",
          email: "Email",
          profile: null,
        },
        recipes: {
          browseRecipes: null,
          savedRecipes: null,
          singleRecipe: null,
        },
        userIngredients: {
          fridgeIngredients: [],
          pantryIngredients: [],
        },
        errors: {
          error: null,
        },
      });

    // cy.window()
    //   .its("store")
    //   .invoke("getState")
    //   .should("deep.equal", {
    //     modalOpen: {
    //       modal: null,
    //     },
    //   });
  });

  //   it("Fails: Help modal visible when home page loads", () => {
  //     cy.visit("localhost:3000");
  //     cy.contains("How to I add ingredients to my Fridge?");
  //   });
});
