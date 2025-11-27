describe("Transferências", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("/");
    cy.fixture("credentials").then((credentials) => {
      cy.get("#username").click().type(credentials.valid.username);
      cy.get("#senha").click().type(credentials.valid.senha);
    });
    cy.contains("button", "Entrar").click();
  });

  it("When sending a transfer greater or equal to R$ 10,00, then return success", () => {
    //Act
    //escolher conta origem
    cy.get("label[for='conta-origem']").parent().as("field-campo-origem");
    cy.get("@field-campo-origem").click();
    cy.get("@field-campo-origem").contains("João da Silva").click();
    //escolher conta destino
    cy.get("label[for='conta-destino']").parent().as("field-campo-destino");
    cy.get("@field-campo-destino").click();
    cy.get("@field-campo-destino").contains("Maria Oliveira").click();
    //preencher valor
    cy.get("#valor").click().type("10");
    //clicar no botão transferir
    cy.contains("button", "Transferir").click();
    //Assert
    cy.get(".toast").should("have.text", "Transferência realizada!");
  });
});
