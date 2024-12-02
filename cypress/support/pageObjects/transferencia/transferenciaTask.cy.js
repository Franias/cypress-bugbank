import { homePage } from "../homePage.cy";
import { transferenciaPage } from "./transferenciaPage.cy";

export const realizaTransferencia = () => {
    
    cy.get('#textAccountNumber').contains('Conta digital: ').should('not.be.disabled');
    let numeroConta;
    let digitoConta;
    cy.wait(1000);    
    cy.get(homePage.numero_conta).then(($span) => {
        const txt = $span.text();
        cy.log(txt);
        numeroConta = txt.split('\-')[0];
        digitoConta = txt.split('\-')[1];
        cy.log(numeroConta);
        cy.log(digitoConta);
        return cy.wrap({ numeroConta, digitoConta });
      }).then((result) => {
        cy.log(result.numeroConta);
        cy.log(result.digitoConta);
        // rest of your code here
      });cy.get(homePage.numero_conta).then(($span) => {
        const txt = $span.text();
        cy.log(txt);
        numeroConta = txt.split('\-')[0];
        digitoConta = txt.split('\-')[1];
        cy.log(numeroConta);
        cy.log(digitoConta);
      });
      cy.wrap({ numeroConta, digitoConta }).then((result) => {
        cy.log(result.numeroConta);
        cy.log(result.digitoConta);
        // rest of your code here
        cy.get(homePage.botao_transferencia).click();
        cy.get(transferenciaPage.numero_conta_input).type(numeroConta);
        cy.get(transferenciaPage.numero_digito_input).type(digitoConta);
    
      });
    // cy.get(homePage.botao_transferencia).click();
    cy.get(transferenciaPage.valor_transferencia).type('100');
    cy.get(transferenciaPage.descricao).type('Descricao teste');//.type(numeroConta);
    cy.get('button').contains('Transferir agora').click({force: true});
}