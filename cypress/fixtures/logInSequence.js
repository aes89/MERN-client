import "@testing-library/cypress/add-commands";

Cypress.Commands.add("logIn", () => {
  cy.visit("localhost:3000");
  // not simulating hover correctly, according to CYpress docs cannot be done with CSS effect, only JS. Used force: true.
  cy.get("i").trigger("mouseover");
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
  cy.setLocalStorage("username", "Testuser");
  cy.get(".nav_trigger__3BDFX").trigger("mouseover");
  cy.get(".nav_nav__3AJrQ").scrollIntoView();
  cy.contains("My Fridge");
});
