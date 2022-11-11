/// <reference types="cypress" />

import home from "../../pageObject/home";



describe('Deve acessar o site VR', () => {

    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit(Cypress.env('URL'))
      })
    it('Deve acessar a pagina PARA VOCE', () => {
        home.paraVoce()
    });
    
    it('Deve validar o mapa ', () => {
        home.mapa()
    });
})