import { acessaHome } from "../support/pageObjects/homeTask.cy";
import { logaUsuario,entraPaginaLogin } from "../support/pageObjects/login/loginTask.cy";
import {cadastraUsuario} from '../support/pageObjects/cadastro/cadastroTask.cy';
import { realizaTransferencia , validaCamposContaInvalidaOuInexistente, validaCamposParaMesmaConta} from "../support/pageObjects/transferencia/transferenciaTask.cy";

describe('Transação com sucesso', () => {
    beforeEach(()=> {
      cy.visit('/');
      cadastraUsuario();
      entraPaginaLogin();
      logaUsuario();
    });
    // it('Deve permitir realizar uma transação entre contas', () => {
    //   acessaHome();
    //   realizaTransferencia();
    // });
    it('Não deve permitir transação para uma mesma conta', () => {
      acessaHome();
      validaCamposParaMesmaConta();
    });
    // it('Não deve permitir realizar uma transação com conta inválida ou inexistente', () => {
    //   acessaHome();
    //   validaCamposContaInvalidaOuInexistente();
    // });
});