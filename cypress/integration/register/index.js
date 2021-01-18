describe("Registration", () => {
  it("Pass: Shows registration modal from homepage", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Register").click({ force: true });
    cy.contains("Email Address");
    cy.contains("Username");
    cy.contains("Password");
    cy.contains("Confirm Password");
  });

  it("Pass: Registers a user", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Register").click({ force: true });
    cy.get(".registerEmail")
      .click()
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.get(".registerUsername")
      .click()
      .type("Testuser")
      .should("have.value", "Testuser");
    cy.get(".registerPassword")
      .click()
      .type("TestPassword!1")
      .should("have.value", "TestPassword!1");
    cy.get(".registerConfirmPassword")
      .click()
      .type("TestPassword!1")
      .should("have.value", "TestPassword!1");
    //can only run once
    // cy.get(".loginSignup_loginSignupButtons__1IlEs").click();
    // cy.contains("Testuser");
  });

  it("Pass: Closes register modal", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Register").click({ force: true });
    cy.contains("Email");
    cy.contains("Username");
    cy.contains("Password");
    cy.contains("Confirm Password");
    cy.contains("Cancel").click({ force: true });
    cy.contains("What is in your fridge?");
  });

  it("Pass: Should display input errors for empty input", () => {
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Register").click({ force: true });
    //incorrect inputs
    cy.get(".registerEmail").click().should("have.value", "");
    cy.get(".registerUsername").click().should("have.value", "");
    cy.get(".registerPassword").click().should("have.value", "");
    cy.get(".registerConfirmPassword").click().should("have.value", "");
    cy.get(".registerPassword").click();

    // errors
    cy.contains("Required");
  });

  it("Pass: Logs in and redirects to user settings page", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.contains("Email");
    cy.contains("Password");
  });

  it("Pass: Should display input errors for incorrect input", () => {
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Register").click({ force: true });
    //incorrect inputs
    cy.get(".registerEmail")
      .click()
      .type("notanemail")
      .should("have.value", "notanemail");
    cy.get(".registerUsername").click().type(" ").should("have.value", " ");
    cy.get(".registerPassword")
      .click()
      .type("badpassword1")
      .should("have.value", "badpassword1");
    cy.get(".registerConfirmPassword")
      .click()
      .type("badpassword2")
      .should("have.value", "badpassword2");
    cy.get(".registerPassword").click();

    // errors
    cy.contains("Invalid email address");
    cy.contains("Invalid username characters");
    cy.contains(
      "Password must contain 8 characters, with 1 upper and lower case character, 1 number and 1 special character."
    );
    cy.contains("Passwords do not match.");
  });

  it("Fail: Should display required error for incorrect input", () => {
    cy.visit("localhost:3000");

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Register").click({ force: true });
    //incorrect inputs
    cy.get(".registerEmail")
      .click()
      .type("notanemail")
      .should("have.value", "notanemail");
    cy.get(".registerUsername").click().type(" ").should("have.value", " ");
    cy.get(".registerPassword")
      .click()
      .type("badpassword1")
      .should("have.value", "badpassword1");
    cy.get(".registerConfirmPassword")
      .click()
      .type("badpassword2")
      .should("have.value", "badpassword2");
    cy.get(".registerPassword").click();

    // errors
    cy.contains("Required");
  });
});
