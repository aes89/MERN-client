import logIn from "../../fixtures/logInSequence";

describe("Fridge page", () => {
  //logs in
  it("Pass: Logs in and loads homepage with username in nav", () => {
    cy.logIn();
  });

  it("Pass: should have the right initial state", function () {
    cy.visit("http://localhost:3000/ingredients/Testuser/fridge");
    cy.window()
      .its("store")
      .invoke("getState")
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
          error: "Error getting fridge ingredients",
        },
      });
  });
});

it("Fail: Loads the preferences page ", () => {
  cy.contains("Vegetarian");
  cy.contains("Sustainable");
});

it("Pass: Loads the fridge page ", () => {
  cy.contains("Add Ingredients");
});

it("Pass: Filters ingredients based on input ", () => {
  cy.get(".MuiFormControl-root").click().type("cheese");
  cy.contains("american cheese");
  cy.should("not.contain", "egg");
  cy.contains("american cheese");
});

it("Pass: Selects and submits ingredients ", () => {
  cy.get(".MuiFormControl-root").click().type("egg");
  cy.contains("eggplant").click();
  cy.get(".MuiFormControl-root").click().type("flour");
  cy.contains("flour").click();
  cy.get(".auto_button__R7_95").click();
});

// example I don't want to loose
// it("finds an image", function() {
//   cy.visit("http://localhost:3000");
//   cy.get("img")
//     .should("have.class", "App-logo")
//     .invoke("attr", "alt")
//     .should("equal", "logo");
// });

//links
//   cy.visit("http://localhost:3000");
//   cy.get("a.App-link")
//     .should($link => {
//       expect($link)
//         .attr("href")
//         .to.equal("/about");
//     })
//     .click();
//   cy.url().should("contain", "/about");
// });
