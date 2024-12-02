import { homePage } from "../homePage.cy";
import { transferenciaPage } from "./transferenciaPage.cy";
import { cadastroPage } from "../cadastro/cadastroPage.cy";

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
      });
      cy.wrap({ numeroConta, digitoConta }).then((result) => {
        cy.log(result.numeroConta);
        cy.log(result.digitoConta);

        cy.get(homePage.botao_sair).click();

        cy.get(cadastroPage.registrar).click();    
        cy.get(cadastroPage.email).eq(1).type('test@test.com.br', {force: true});
        cy.get(cadastroPage.nome).type('Test',{force: true});
        cy.get(cadastroPage.senha).eq(1).type('senha',{force: true});
        cy.get(cadastroPage.confirmacao_senha).type('senha',{force: true});
        cy.get(cadastroPage.botao_conta_com_saldo).click({force: true});
        cy.get('button').contains('Cadastrar').click({force: true});
        cy.get(cadastroPage.mensagem_sucesso);  
        cy.get(cadastroPage.x_modal).click();



        // rest of your code here
        // cy.get(homePage.botao_transferencia).click();
        // cy.get(transferenciaPage.numero_conta_input).type(numeroConta);
        // cy.get(transferenciaPage.numero_digito_input).type(digitoConta);
    
      });
    // cy.get(homePage.botao_transferencia).click();
    // cy.get(transferenciaPage.valor_transferencia).type('100');
    // cy.get(transferenciaPage.descricao).type('Descricao teste');//.type(numeroConta);
    // cy.get('button').contains('Transferir agora').click({force: true});
}