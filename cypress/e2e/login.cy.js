describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("When using valid credentials to login, then show the secret page", () => {
    cy.loginWithValidCredentials();
    cy.contains("Realizar Transferência").should("be.visible");
  });

  it("When using invalid credentials to login, then show a toast message", () => {
    cy.loginWithInvalidCredentials();
    cy.verifyToastMessage("Erro no login. Tente novamente.");
  });
});
