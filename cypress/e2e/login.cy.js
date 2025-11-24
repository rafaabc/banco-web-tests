describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000/");
  });
  it("When using valid credentials to login, then show the secret page", () => {
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("Realizar Transferência").should("be.visible");
  });

  it("When using invalid credentials to login, then show a toast message", () => {
    cy.get("#username").click().type("julio.limas");
    cy.get("#senha").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
