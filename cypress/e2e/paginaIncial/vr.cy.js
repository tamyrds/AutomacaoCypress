/// <reference types="cypress" />

import home from "../../pageObject/home";

describe('Deve clicar em Para Voce', () => {
    it('', () => {
        home.open()
        home.paraVoce()
    });
})