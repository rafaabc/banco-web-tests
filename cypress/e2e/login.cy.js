describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000/");
  });
  it("When using valid credentials to login, then show the secret page", () => {
    cy.fixture("credentials").then((credentials) => {
      cy.get("#username").click().type(credentials.valid.username);
      cy.get("#senha").click().type(credentials.valid.senha);
    });
    cy.contains("button", "Entrar").click();
    cy.contains("Realizar Transferência").should("be.visible");
  });

  it("When using invalid credentials to login, then show a toast message", () => {
    cy.fixture("credentials").then((credentials) => {
      cy.get("#username").click().type(credentials.invalid.username);
      cy.get("#senha").click().type(credentials.invalid.senha);
    });

    cy.contains("button", "Entrar").click();
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
