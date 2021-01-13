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
      .type("TestUser1!")
      .should("have.value", "TestUser1!");
    cy.contains("Log In").click();
    cy.contains("You are logged in!");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Preferences").click({ force: true });
    cy.setLocalStorage("username", "Testuser");
  });

  it("Pass: Loads the preferences page ", () => {
    cy.contains("Vegetarian");
    cy.contains("Sustainable");
  });

  it("Pass: Loads the preferences page ", () => {
    cy.contains("Vegan");
    cy.contains("Dairy-Free");
  });

  it("Pass: Shows preferences from state ", () => {
    cy.clearLocalStorageSnapshot();
    cy.setLocalStorage("username", "Testuser");

    cy.contains("Vegetarian").click();
    cy.contains("Sustainable").click();
    cy.setLocalStorage("vegetarian", "true");
    cy.setLocalStorage("sustainable", "true");

    cy.get(".preferences_updateButton__1uzNO").click();
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Preferences").click({ force: true });
  });

  it("Pass: Previous selections are loaded from state ", () => {
    cy.clearLocalStorageSnapshot();
    cy.setLocalStorage("username", "Testuser");
    cy.setLocalStorage("vegetarian", "true");
    cy.setLocalStorage("sustainable", "true");
    cy.get(".nav_trigger__3BDFX").trigger("mouseover");
    cy.get(".nav_nav__3AJrQ").scrollIntoView();
    cy.contains("Preferences").click({ force: true });

    //crashes db??

    // cy.focused().should("have.attr", "name", "username");
  });

  // it("Fail: Shows fridge ingredients form ", () => {
  //   cy.contains("Add Ingredients");

  // });
});

// test checkbox ticked or not with this value? true vs false
{
  /* <input name="vegetarian" type="checkbox" value="true" checked=""></input> */
}
