import logIn from "../../fixtures/logInSequence";

describe("Home page with user logged in", () => {
  it("Pass: Logs in", () => {
    cy.logIn();
  });

  it("Fail: Should not be logged in", () => {
    cy.visit("localhost:3000");

    cy.contains("What is in your fridge?");

    cy.contains("Log in");
  });

  it("Pass: Loads the home page", () => {
    cy.visit("localhost:3000");

    cy.contains("What is in your fridge?");

    cy.contains("FridgeMate");
    cy.contains("What is in your fridge?");
  });

  it("Pass: Shows the nav", () => {
    cy.visit("localhost:3000");

    cy.contains("What is in your fridge?");

    cy.contains("FridgeMate");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("My Preferences");
  });

  it("Pass: Navigates to My Fridge", () => {
    cy.setLocalStorage("username", "Testuser");
    cy.visit("localhost:3000/");
    cy.contains("My Fridge").click({ force: true });
    cy.contains("My Fridge");
    cy.contains("Looks like you have no fridge items");
  });

  it("Pass: Navigates to Pantry Staples", () => {
    cy.visit("localhost:3000/");
    cy.setLocalStorage("username", "Testuser");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Pantry Staples").click({ force: true });
    cy.visit("http://localhost:3000/ingredients/Testuser/pantry");
    cy.contains("Pantry");
    cy.contains("Looks like you have no pantry items!");
  });

  it("Pass: Navigates to Saved Recipes ", () => {
    cy.setLocalStorage("username", "Testuser");
    cy.visit("localhost:3000/");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Saved Recipes").click({ force: true }).wait(5000);
    cy.request("recipes/saved-recipes");
    cy.contains("Your Saved Recipes");
  });

  it("Pass: Navigates to My Prefernces", () => {
    cy.setLocalStorage("username", "Testuser");
    cy.visit("localhost:3000/");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.setLocalStorage("username", "Testuser");
    cy.setLocalStorage("savedRecipes", "null");

    cy.contains("My Preferences").click({ force: true });
    cy.contains("Preferences");
  });
});
