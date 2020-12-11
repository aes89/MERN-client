describe("Log In", () => {
  it("Shows Login modal", () => {
    cy.visit("localhost:3000");

    cy.contains("Register").click();

    cy.contains("Email Address");
    cy.contains("Password");
    cy.contains("Confirm Password");

    cy.get(".modalLoginButton").click();
    cy.contains("Log In:");
  });

  it("Gets, types and asserts", () => {
    cy.visit("localhost:3000");

    cy.contains("Register").click();

    cy.contains("Email Address");
    cy.contains("Password");

    cy.get(".registerEmail")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get(".registerPassword")
      .type("Passwordtest1@")
      .should("have.value", "Passwordtest1@");
  });

  it("Shows input error messages", () => {
    cy.visit("localhost:3000");
    cy.contains("Register").click();
    cy.get(".registerEmail").click();
    cy.get(".registerConfirmPassword").click();
    cy.contains("Required");

    cy.get(".registerPassword").click();
    cy.get(".registerConfirmPassword").click();
    cy.contains("Required");

    cy.get(".registerConfirmPassword").click();
    cy.get(".registerPassword").click();
    cy.contains("Required");

    cy.get(".registerEmail")
      .type("bad.email.com")
      .should("have.value", "bad.email.com");
    cy.get(".registerPassword");
    cy.contains("Invalid email");

    cy.get(".registerPassword")
      .type("notagoodpassword")
      .should("have.value", "notagoodpassword");
    cy.get(".registerConfirmPassword").click();
    cy.contains("Password must contain 8");

    cy.get(".registerPassword")
      .clear()
      .type("AGoodPassword1@")
      .should("have.value", "AGoodPassword1@");
    cy.get(".registerConfirmPassword").type("UgOhItsDifferent");
    cy.get(".registerEmail").click();
    cy.contains("Passwords do not match.");
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
