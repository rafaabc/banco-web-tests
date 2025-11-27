Cypress.Commands.add("loginWithValidCredentials", () => {
  cy.fixture("credentials").then((credentials) => {
    cy.get("#username").click().type(credentials.valid.username);
    cy.get("#senha").click().type(credentials.valid.senha);
  });
  cy.contains("button", "Entrar").click();
});

Cypress.Commands.add("loginWithInvalidCredentials", () => {
  cy.fixture("credentials").then((credentials) => {
    cy.get("#username").click().type(credentials.invalid.username);
    cy.get("#senha").click().type(credentials.invalid.senha);
  });

  cy.contains("button", "Entrar").click();
});
