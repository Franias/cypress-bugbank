import {entraPaginaLogin, logaUsuario, validaCampos} from '../support/pageObjects/login/loginTask.cy';
import {cadastraUsuario} from '../support/pageObjects/cadastro/cadastroTask.cy';

describe('Jornada de Usuário', () => {
  beforeEach(()=> {
    cy.visit('/');
    cadastraUsuario();
    entraPaginaLogin();
  });
  it('Deve permitir que a pessoa usuária acesse a aplicação e realize um login', () => {
    logaUsuario();
    cy.screenshot();
  });
  it('Não deve permitir que a pessoa usuária realize um login', () => {
    validaCampos();
    cy.screenshot();
  });
  
});