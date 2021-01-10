describe("Log In", () => {
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

  it("Pass: Logs in and loads homepage with username in nav", () => {
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
      .type("TestPassword!1")
      .should("have.value", "TestPassword!1");
    cy.contains("Log In").click();
    cy.contains("You are logged in!");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Testuser");
  });

  it("Fail: Logs in and loads homepage with incorrect username in nav", () => {
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
      .type("TestPassword!1")
      .should("have.value", "TestPassword!1");
    cy.contains("Log In").click();
    cy.contains("You are logged in!");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Barry");
  });

  it("Pass: Logs in with incorrect credentials", () => {
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

    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Login").click({ force: true });
    cy.get(".loginEmail")
      .click()
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.get(".loginPassword")
      .click()
      .type("TestPassword!1")
      .should("have.value", "TestPassword!1");
    cy.contains("Log In").click();
    cy.contains("You are logged in!");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Log out").click({ force: true });
    cy.contains("Goodbye");
  });
});
