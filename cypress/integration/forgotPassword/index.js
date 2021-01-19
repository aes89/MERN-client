describe("Forgot password modal", () => {
  it("Pass: should have the right initial state", function () {
    cy.visit("http://localhost:3000/");
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
          error: null,
        },
      });
  });

  it("Pass: Shows forgot password modal", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Forgot Password").click().wait(2500);
    cy.contains("Send Login Link");
  });

  it("Pass: Closes forgot password modal", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Forgot Password").click().wait(2500);
    cy.contains("Send Login Link");
    cy.contains("Back").click();
    cy.contains("Cancel").click();
    cy.get(".modals_loginSignupBox__1ZeFY").should("not.exist");
  });

  it("Pass: Enters incorrect email format and gets an error", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Forgot Password").click();
    cy.contains("Send Login Link");

    cy.get(".resetEmail")
      .click()
      .type("wrongemail")
      .should("have.value", "wrongemail");
    cy.contains("Send Login Link").click();
    cy.contains("Invalid");
  });

  it("Pass: Enters no email and gets an error", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Forgot Password").click();
    cy.contains("Send Login Link");

    cy.get(".resetEmail").click().should("have.value", "");
    cy.contains("Send Login Link").click();
    cy.contains("Required");
  });
});
