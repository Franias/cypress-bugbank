import { homePage } from "./homePage.cy";

export const acessaHome = () => {
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/home')
    })
    cy.get(homePage.texto_nome).should('be.visible');
    cy.get(homePage.numero_conta);
}
