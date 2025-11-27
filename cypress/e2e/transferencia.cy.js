describe("Transferências", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginWithValidCredentials();
  });

  it("When sending a transfer greater or equal to R$ 10,00, then return success", () => {
    cy.transferValue("João da Silva", "Maria Oliveira", "10");

    cy.verifyToastMessage("Transferência realizada!");
  });

  it("When sending a transfer greater or equal to R$ 5000,00, then return fail withou token", () => {
    cy.transferValue("João da Silva", "Maria Oliveira", "5000");

    cy.verifyToastMessage(
      "Autenticação necessária para transferências acima de R$5.000,00."
    );
  });
});
