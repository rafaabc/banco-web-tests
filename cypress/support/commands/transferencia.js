Cypress.Commands.add("transferValue", (contaOrigem, contaDestino, value) => {
  cy.selectComboboxOption("conta-origem", contaOrigem);
  cy.selectComboboxOption("conta-destino", contaDestino);

  cy.get("#valor").click().type(value);
  cy.contains("button", "Transferir").click();
});
