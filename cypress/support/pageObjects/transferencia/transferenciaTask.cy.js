import { homePage } from "../homePage.cy";
import { transferenciaPage } from "./transferenciaPage.cy";
import { cadastroPage } from "../cadastro/cadastroPage.cy";
import { loginPage } from "../login/loginPage.cy";


const valor = 100;
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
        cy.wrap({ numeroConta, digitoConta }).as('accountInfo');

      });
      cy.get('@accountInfo').then((accountInfo) => {
        cy.log(accountInfo.numeroConta);
        cy.log(accountInfo.digitoConta);

        cy.get(homePage.botao_sair).click();

        cy.get(cadastroPage.registrar).click();    
        cy.get(cadastroPage.email).eq(1).type('test2@test.com.br', {force: true});
        cy.get(cadastroPage.nome).type('Test 2',{force: true});
        cy.get(cadastroPage.senha).eq(1).type('senha',{force: true});
        cy.get(cadastroPage.confirmacao_senha).type('senha',{force: true});
        cy.get(cadastroPage.botao_conta_com_saldo).click({force: true});
        cy.get('button').contains('Cadastrar').click({force: true});
        cy.get(cadastroPage.mensagem_sucesso); 
        cy.get(cadastroPage.x_modal).click();

        cy.get(loginPage.email).eq(0).type('test2@test.com.br', {force: true});
        cy.get(loginPage.senha).eq(0).type('senha',{force: true});
        cy.get(loginPage.acessar).click();

        cy.get(homePage.botao_transferencia).click();
        cy.get(transferenciaPage.numero_conta_input).type(numeroConta);
        cy.get(transferenciaPage.numero_digito_input).type(digitoConta);

      });
    cy.get(transferenciaPage.valor_transferencia).type(valor);
    cy.get(transferenciaPage.descricao).type('Descricao teste');
    cy.get('button').contains('Transferir agora').click({force: true});
    cy.get(transferenciaPage.botao_fechar_modal).click();
    cy.get(transferenciaPage.botao_voltar).click();
    
}


export const validaCamposContaInvalidaOuInexistente = () => {
  cy.get(homePage.botao_transferencia).click();
  cy.get(transferenciaPage.numero_conta_input).type('invalido');
  cy.get(transferenciaPage.numero_digito_input).type('invalido');
  cy.get(transferenciaPage.valor_transferencia).type(valor);
  cy.get(transferenciaPage.descricao).type('Descricao teste');
  cy.get('button').contains('Transferir agora').click({force: true});

}

export const validaCamposParaMesmaConta = () => {
  cy.get(homePage.numero_conta).then(($span) => {
    const txt = $span.text();
    cy.log(txt);
    let numeroConta2 = txt.split('\-')[0];
    let digitoConta2 = txt.split('\-')[1];
    cy.log(numeroConta2);
    cy.log(digitoConta2);
    cy.get(homePage.botao_transferencia).click();
    cy.get(transferenciaPage.numero_conta_input).type(numeroConta2);
    cy.get(transferenciaPage.numero_digito_input).type(digitoConta2);
    cy.get(transferenciaPage.valor_transferencia).type(valor);
    cy.get(transferenciaPage.descricao).type('Descricao teste');
    cy.get('button').contains('Transferir agora').click({force: true});

    cy.get(transferenciaPage.texto_modal).then(($p) => {
      const txt = $p.text();
      cy.log(txt);
      cy.get('#modalText').should('have.value', 'Nao pode transferir pra mesmo conta');
    });
  });
  

}