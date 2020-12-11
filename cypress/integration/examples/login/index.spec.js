describe("Log In", () => {
  it("Shows registration modal", () => {
    cy.visit("localhost:3000");

    cy.contains("Login").click();

    cy.contains("Email Address");
    cy.contains("Password");

    cy.get(".modalRegisterButton").click();
    cy.contains("Register:");
  });

  it("Gets, types and asserts", () => {
    cy.visit("localhost:3000");

    cy.contains("Login").click();

    cy.contains("Email Address");
    cy.contains("Password");

    cy.get(".loginEmail")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get(".loginPassword")
      .type("passwordtest")
      .should("have.value", "passwordtest");
  });

  it("Closes modal", () => {
    cy.visit("localhost:3000");

    cy.contains("Login").click();

    cy.contains("Email Address");
    cy.contains("Password");

    cy.get(".modalCancelButton").click();
    cy.contains("Email").should("not.exist");
  });
});
