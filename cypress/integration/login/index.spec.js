import logIn from "../../fixtures/logInSequence.spec";

describe("Log In", () => {
  it("Pass: should have the right initial state", function () {
    cy.visit("http://localhost:3000/ingredients/Testuser/fridge");
    cy.window()
      .its("store")
      .invoke("getState")
      // .should("deep.equal", { userLoggedIn: { username: "Testuser" } });
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
          error: "Error getting fridge ingredients",
        },
      });
  });

  it("Pass: Shows login modal", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Email");
    cy.contains("Password");
  });

  it("Pass: Closes login modal", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Cancel").click({ force: true });
    cy.contains("What is in your fridge?");
  });

  it("Pass: Logs in and changes state", () => {
    cy.logIn();
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Testuser");
    cy.window()
      .its("store")
      .invoke("getState")
      // .should("deep.equal", { userLoggedIn: { username: "Testuser" } });
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
          username: "Testuser",
          jwt: undefined,
        },
        currentUserSettings: {
          username: "Username",
          email: "Email",
          profile: undefined,
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

  it("Fail: Logs in and loads homepage with incorrect username in nav", () => {
    cy.logIn();
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Barry");
  });

  it("Pass: Deson't log in with incorrect credentials", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.get(".loginEmail")
      .click()
      .type("wrongemail@test.com")
      .should("have.value", "wrongemail@test.com");
    cy.get(".loginPassword")
      .click()
      .type("WrongPassword!1")
      .should("have.value", "WrongPassword!1");
    cy.contains("Log In").click();
    cy.contains("Error: Authentication failed");
    cy.contains("Oh no!");
  });

  it("Pass: Enters incorrect email format and no password and and gets an error", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.get(".loginEmail")
      .click()
      .type("wrongemail")
      .should("have.value", "wrongemail");
    cy.get(".loginPassword").click().should("have.value", "");
    cy.contains("Log In").click();
    cy.contains("Required");
  });

  it("Fail: Enters incorrect email format and password and and gets an error", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.get(".loginEmail")
      .click()
      .type("wrongemail")
      .should("have.value", "wrongemail");
    cy.get(".loginPassword")
      .click()
      .type("wrongpassword")
      .should("have.value", "wrongpassword");
    cy.contains("Log In").click();
    cy.contains("Required");
  });

  it("Pass: Logs in and logs out", () => {
    cy.visit("localhost:3000");

    cy.logIn();
    cy.contains("You are logged in!");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Log out").click({ force: true });
    cy.contains("Come back soon");
  });
});
