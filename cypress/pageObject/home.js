/// <reference types="cypress" />

import { elem } from "../support/pages/elements";

//const elem = require("../pages/elements").elem;


class home {
    open(){
        cy.viewport(1536, 960)
        cy.visit(Cypress.env('URL'))
        
    }

    paraVoce(){
        cy.contains('Pra Você')
            .should('be.visible')
            .click()

            cy.url()
            .should('be.equal', 'https://www.vr.com.br/onde-aceita.htm') 
            console.log()

        cy.get(elem.meuVr) // Deve clicar no botão "Onde usar meu cartão VR?""
          .should('be.visible', 'Onde usar meu cartão VR?')
          .click()
        cy.wait(5000)
        //cy.get('be.visible', elem.form)
        cy.get(elem.mapa)
            .trigger('mousedown', { which: 5 })
            .trigger('mousemove', { which: 5, x: 261, y: 0 })
            .trigger('mouseup')
            .click(320, 100)
            .wait(500);
          
    }
}


export default new home