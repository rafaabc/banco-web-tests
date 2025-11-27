Cypress.Commands.add("verifyToastMessage", (message) => {
  cy.get(".toast").should("have.text", message);
});

Cypress.Commands.add("selectComboboxOption", (fieldLabel, option) => {
  cy.get(`label[for="${fieldLabel}"]`).parent().as(`field-${fieldLabel}`);
  cy.get(`@field-${fieldLabel}`).click();
  cy.get(`@field-${fieldLabel}`).contains(option).click();
});
