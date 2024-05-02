/// <reference types="cypress"/>

describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });



    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            // .first() <- pega o primeiro item da lista
            // .last() <- pega o ultimo item da lista
            //.eq(2) <- pega o item pelo index
            .contains('Argus All-Weather Tank') // pega o produto pelo nome
            .click()

    });

    it('Adicionar produto ao carrinho - Usando comandos customizados', () => {

        let qtd = 5

        cy.addProdutos('Arcadio Gym Short', 33, 'Blue', qtd)

        //resultado esperado
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', `adicionados no seu carrinho.`)

    });

    it('Adicionar o segundo produto ao carrinho - Usando comandos customizados com parametros diferentes', () => {

        let qtd = 10

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Purple', qtd)

        //resultado esperado
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', `adicionados no seu carrinho.`)

    });

});