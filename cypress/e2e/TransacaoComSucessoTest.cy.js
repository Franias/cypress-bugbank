import { acessaHome } from "../support/pageObjects/homeTask.cy";
import { logaUsuario,entraPaginaLogin } from "../support/pageObjects/login/loginTask.cy";
import {cadastraUsuario} from '../support/pageObjects/cadastro/cadastroTask.cy';
import { realizaTransferencia } from "../support/pageObjects/transferencia/transferenciaTask.cy";

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