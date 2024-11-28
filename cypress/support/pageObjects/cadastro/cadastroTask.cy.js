import { cadastroPage } from '../cadastro/cadastroPage.js';

export const cadastraUsuario = () => {
    // cy.get(cadastroPage.registrar).click();    
    cy.get(cadastroPage.email).type('test@test.com.br');
    cy.get(cadastroPage.nome).type('Test');
    cy.get(cadastroPage.senha).type('senha');
    cy.get(cadastroPage.confirmacao_senha).type('senha');
    cy.get(cadastroPage.botao_sucesso).click();
    // cy.get(cadastroPage.mensagem_sucesso);

}

export const entraPaginaCadastro = () => {
    cy.get(cadastroPage.registrar).click();  

    cy.get('a[id="btnBackButton"]').should('be.visible');
}

export const validaCampos= () => {
  cy.get(cadastroPage.botao_sucesso).click();

  cy.get(cadastroPage.erro_nome);
  cy.get(cadastroPage.erro_cpf);
  cy.get(cadastroPage.erro_email);
  cy.get(cadastroPage.erro_cep);
  cy.get(cadastroPage.erro_endereco);
  cy.get(cadastroPage.erro_entrega);
  cy.get(cadastroPage.erro_img);

  cy.get(cadastroPage.whats).type('9');
  cy.get(cadastroPage.botao_sucesso).click();

  cy.get(cadastroPage.erro_whats);

  cy.get(cadastroPage.cpf).type('9');
  cy.get(cadastroPage.botao_sucesso).click();
  cy.get(cadastroPage.erro_cpf_invalido);
}