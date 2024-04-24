/// <reference types='cypress'/>

//usando a lib faker
var faker = require('@faker-js/faker')

// descrice e context funcionam da mesma forma
describe('Funcionalidade Pre-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    //criando as constantes fakes
    const nome = faker.fakerPT_BR.person.firstName("male")
    const sobrenome = faker.fakerPT_BR.person.lastName("male")
    const email = faker.fakerPT_BR.internet.email(nome, sobrenome)

    it('deve ser criado o pré cadastro com sucesso', () => {

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        //entra na aba "minha conta para adicionar mais informações"
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        //adiciona e salva as informações pendentes
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#account_display_name').clear()
        cy.get('#account_display_name').type(nome + ' ' + sobrenome)
        cy.get('.woocommerce-Button').click()

        //Resultado esperado
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')

    });




});