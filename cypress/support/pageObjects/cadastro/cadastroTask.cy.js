import { cadastroPage } from './cadastroPage.cy';

export const cadastraUsuario = () => {
    // cy.get(cadastroPage.registrar).click();    
    cy.get(cadastroPage.email).eq(1).type('test@test.com.br', {force: true});
    cy.get(cadastroPage.nome).type('Test',{force: true});
    cy.get(cadastroPage.senha).eq(1).type('senha',{force: true});
    cy.get(cadastroPage.confirmacao_senha).type('senha',{force: true});
    cy.get(cadastroPage.botao_conta_com_saldo).click({force: true});
    // cy.get(cadastroPage.botao_cadastro).click();
    cy.get('button').contains('Cadastrar').click({force: true});
    cy.get(cadastroPage.mensagem_sucesso);
    cy.get(cadastroPage.x_modal).click();

}

export const entraPaginaCadastro = () => {
    cy.get(cadastroPage.registrar).click();  
    cy.contains('Voltar ao login').should('not.be.disabled');
}

export const validaCampos= () => {
  cy.get('button').contains('Cadastrar').click({force: true});
  cy.get('p').contains('É campo obrigatório');

  cy.get(cadastroPage.mensagem_erro);

  cy.get(cadastroPage.email).type('9');
  cy.get('p').contains('Formato inválido');
  
  cy.get(cadastroPage.botao_sucesso).click();

  cy.get(cadastroPage.erro_whats);

  cy.get(cadastroPage.cpf).type('9');
  cy.get(cadastroPage.botao_sucesso).click();
  cy.get(cadastroPage.erro_cpf_invalido);
}