import logIn from "../../fixtures/logInSequence";

describe("Browse Recipes", () => {
  it("Pass: Loads browse page", () => {
    cy.logIn();
    cy.visit("http://localhost:3000/recipes/browse");
    cy.wait(5000);
    cy.contains("Browse Recipes");
  });
});
