describe("Home page with user logged in", () => {
  it("Pass: Logs in", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.get(".loginEmail")
      .click()
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.get(".loginPassword")
      .click()
      .type("TestUser1!")
      .should("have.value", "TestUser1!");
    cy.contains("Log In").click();
    cy.contains("You are logged in!");
    cy.clearLocalStorageSnapshot();
    cy.setLocalStorage("username", "Testuser");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Testuser");
  });

  it("Fail: Should be logged in", () => {
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
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("My Fridge").click({ force: true });
    cy.contains("My Fridge");
    cy.contains("Looks like you have no fridge items");
  });

  it("Pass: Navigates to Pantry Staples", () => {
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Pantry Staples").click({ force: true });
    cy.contains("Pantry");
    cy.contains("Looks like you have no pantry items!");
  });

  it("Pass: Navigates to Saved Recipes", () => {
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Saved Recipes").click({ force: true });
    cy.contains("Recipes");
    cy.contains("Looks like you have no recipes saved! ");
  });

  it("Pass: Navigates to My Prefernces", () => {
    cy.setLocalStorage("username", "Testuser");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("My Preferences").click({ force: true });
    cy.contains("Preferences");
  });
});
