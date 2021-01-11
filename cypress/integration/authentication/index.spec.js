describe("Log In", () => {
  it("Pass: Had the right initial state", () => {
    cy.visit("http://localhost:3000/");
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
  });

  it("Pass: Closes login modal", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Email");
    cy.contains("Password");
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", {
        modalOpen: {
          modal: "login",
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
    cy.contains("Cancel").click({ force: true });
    cy.contains("What is in your fridge?");
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
  });
});
