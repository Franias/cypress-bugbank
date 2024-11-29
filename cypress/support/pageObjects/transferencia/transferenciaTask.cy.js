import { homePage } from "./homePage.cy";

export const realizaTransferencia = () => {
    cy.get(homePage.numero_conta).invoke('text').then((text) => {
        var numeroConta = text.split('\-')[0];
        var digitoConta = text.split('\-')[1];
        console.log('LOOOOOOOOG', numeroConta);
        console.log('LOOOOOOOOG', digitoConta);
    });
    cy.get(homePage.botao_transferencia).click();
}