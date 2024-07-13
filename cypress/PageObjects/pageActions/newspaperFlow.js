import selectorsNewspaper from "../pageElements/newspaperFlow";

class Newspaper {
  pagePopIn() {
    cy.wait(3000);
    cy.get(selectorsNewspaper.popIn).should("be.visible");
  }
  clickCommencer() {
    cy.get(selectorsNewspaper.btnCommencer).click();
  }
  fillDate() {
    cy.wait(3000);
    cy.get(selectorsNewspaper.btnDateBarre).click({ force: true });
    cy.get(selectorsNewspaper.btndatejour).type("2024-07-13");
  }
  enterAdress() {
    cy.get(selectorsNewspaper.inputoldAdd).type("12 rue de Brest, 69002 Lyon");
    cy.get(selectorsNewspaper.oldAdress).click();
    cy.get(selectorsNewspaper.inputnewAdd).type(
      "4 rue Descartes, 44000 Nantes"
    );
    cy.get(selectorsNewspaper.newAdress).click();
    cy.get(selectorsNewspaper.btnNext).click();
  }
  pageOffersPoste() {
    cy.get(selectorsNewspaper.posteLogo).should("be.visible");
    cy.get(selectorsNewspaper.btnchoisir).click();
  }
  fillInfoForm() {
    cy.get(selectorsNewspaper.inputemail).type("Hadhemi222@papernest.com");
    cy.get(selectorsNewspaper.inputTel).type("612345678");
    cy.get(selectorsNewspaper.civilite1).click();

    cy.get(selectorsNewspaper.inputPrenom1).type("Jean");
    cy.get(selectorsNewspaper.inputNom1).type("Dupont");
    //cy.get(selectorsNewspaper.checkBox).click();
    // cy.get(selectorsNewspaper.civilite2).click();
    // cy.get(selectorsNewspaper.inputPrenom2).type("Alexandra");
    // cy.get(selectorsNewspaper.inputNom2).type("Dupont");
    cy.wait(3000);
    cy.get(selectorsNewspaper.btnNext2).realType('{enter}');
  }
  recevoirCode(){
   cy.get(selectorsNewspaper.selectCodeChoix).click();
   cy.get(selectorsNewspaper.btnNext2).realType('{enter}');
  }
  summuryPage(){
   cy.wait(3000)
   cy.contains(selectorsNewspaper.summury,'Est-ce que tout est bon Jean?').should('be.visible');
   cy.get(selectorsNewspaper.btnNextSummury).click();
  }
  paymentPage(){
   cy.contains(selectorsNewspaper.pagePayment,"Il ne vous reste plus qu'à payer la redirection").should('be.visible');
  }
}
export default new Newspaper();
