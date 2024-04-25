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
    var qtd = 5

    it('Adicionar produto ao carrinho', () => {
        cy.get('.product-block')
            .contains('Argus All-Weather Tank') // pega o produto pelo nome
            .click()

        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(qtd)

        cy.get('.single_add_to_cart_button').click()

        //resultado esperado
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', `${qtd} × “Argus All-Weather Tank” foram adicionados no seu carrinho.`)



    });

});