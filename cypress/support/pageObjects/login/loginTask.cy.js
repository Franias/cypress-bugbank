import { loginPage } from '../login/loginPage.cy.js';

export const logaUsuario = () => {
  cy.get(loginPage.email).eq(0).type('test@test.com.br', {force: true});
  cy.get(loginPage.senha).eq(0).type('senha',{force: true});
  cy.get(loginPage.acessar).click();
  // Declare a variable to store the text
  let textFromSpan = '';

  // Get the text from the element and store it in the variable
  cy.get('#textAccountNumber > span').then(($span) => {
    textFromSpan = $span.text(); // Extract the text
  });
  cy.log(textFromSpan);
  console.log('TEXTO DO SPAN',textFromSpan);
}

export const entraPaginaLogin = () => {
  cy.contains('Voltar ao login').should('not.be.disabled');
  cy.get(loginPage.botao_volta_login).click({force: true});
  
}

export const validaCampos= () => {
  cy.get(loginPage.acessar).click();
  cy.get('p').contains('É campo obrigatório');
}
