import { homePage } from "../homePage.cy";
import { transferenciaPage } from "./transferenciaPage.cy";

export const realizaTransferencia = () => {
    let numeroConta;
    let digitoConta;
    // cy.get(homePage.numero_conta).invoke('text').then((text) => {
    //     numeroConta = text.split('\-')[0];
    //     digitoConta = text.split('\-')[1];
    // });
    
    cy.get(homePage.numero_conta).then(($span) => {
        const txt = $span.text();
        cy.log(txt);

    });

    // cy.get(homePage.botao_transferencia).click();
    // cy.get(transferenciaPage.numero_conta_input).type('559');
    // cy.get(transferenciaPage.numero_digito_input).type('4');
    // cy.get(transferenciaPage.valor_transferencia).type('100');
    // cy.get(transferenciaPage.descricao).type('Descricao teste');//.type(numeroConta);
    // cy.get('button').contains('Transferir agora').click({force: true});
}