/// <reference types="cypress"/>

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha conta')
        cy.login(perfil.usuario,perfil.senha)
    });
    
    it('Deve fazer o cadastro de faturamento', () => {
        
    });
});