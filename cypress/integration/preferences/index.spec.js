describe("Preferences page", () => {
  //logs in
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
    cy.contains("Preferences").click({ force: true });
  });

  it("Pass: Loads the preferences page ", () => {
    cy.contains("Vegetarian");
    cy.contains("Sustainable");
  });

  it("Pass: Loads the preferences page ", () => {
    cy.contains("Vegetarian");
    cy.contains("Sustainable");
  });

  it("Pass: Selects and submits preferences ", () => {
    cy.contains("Vegetarian").click();
    cy.contains("Sustainable").click();
    //crashes db??
    cy.get(".preferences_updateButton__1uzNO").click();
    // cy.focused().should("have.attr", "name", "username");
  });

  // it("Fail: Shows fridge ingredients form ", () => {
  //   cy.contains("Add Ingredients");

  // });
});
