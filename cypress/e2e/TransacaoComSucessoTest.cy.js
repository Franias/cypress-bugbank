import { acessaHome, realizaTransferencia } from "../support/pageObjects/homeTask.cy";
import { logaUsuario,entraPaginaLogin } from "../support/pageObjects/login/loginTask.cy";
import {cadastraUsuario} from '../support/pageObjects/cadastro/cadastroTask.cy';

describe('Transação com sucesso', () => {
    beforeEach(()=> {
      cy.visit('/');
      cadastraUsuario();
      entraPaginaLogin();
      logaUsuario();
    });
    it('Deve permitir realizar uma transação entre contas', ()=>{
      acessaHome();
      realizaTransferencia();
    })
});