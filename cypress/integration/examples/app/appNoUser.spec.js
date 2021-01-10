describe("Home page without user", () => {
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

  it("Fail: Should not be logged in", () => {
    cy.visit("localhost:3000");

    cy.contains("What is in your fridge?");

    cy.contains("Logout");
  });

  //to be completed
  // it("Shows a joke", () => {

  // });
  // it("Shows login/register on any link when user not logged in", () => {

  // });
});
