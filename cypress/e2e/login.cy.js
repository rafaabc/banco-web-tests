describe("Login", () => {
  it("When using valid credentials to login, then show the secret page", () => {
    cy.visit("http://localhost:4000/");
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("123456");
    cy.get("#login-section > .btn").click();
    cy.contains("Realizar Transferência").should("be.visible");
  });
});
