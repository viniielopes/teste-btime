describe("Board", () => {
  it("Edit Card", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("todo");
    cy.get("div").contains("todo").click();
    cy.get('input[name="title"]').clear().type("Alteração do titulo");
    cy.get("p").contains("Alta").click();
    cy.get('textarea[name="description"]').type("Nova descrição");
    cy.get("input[type=file]").selectFile("cypress/fixtures/user.png");
    cy.get('input[name="endDate"]').clear().type("30/12/2023");
    cy.get("button").contains("Salvar").click();
    cy.get("input").clear().type("Alteração");
    cy.get("div").contains("Alteração").should("be.visible");
  });

  it("Add new Card", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("todo");
    cy.get("button").contains("Add Tarefa").click();
    cy.get('input[name="title"]').clear().type("Novo Card");
    cy.get("p").contains("Média").click();
    cy.get('textarea[name="description"]').type("Nova descrição");
    cy.get("input[type=file]").selectFile("cypress/fixtures/user.png");
    cy.get('input[name="endDate"]').clear().type("30/02/2024");
    cy.get("button").contains("Salvar").click();
    cy.get("input").clear().type("Novo");
    cy.get("div").contains("Novo").should("be.visible");
  });
});
