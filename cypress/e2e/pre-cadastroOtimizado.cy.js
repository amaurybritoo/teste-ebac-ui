/// <reference types="cypress"/>

//usando a lib faker
var faker = require('@faker-js/faker')

//criando as constantes fakes
const nome = faker.fakerPT_BR.person.firstName("male")
const sobrenome = faker.fakerPT_BR.person.lastName("male")
const email = faker.fakerPT_BR.internet.email(nome, sobrenome)
const senha = faker.fakerPT_BR.internet.password()

// descrice e context funcionam da mesma forma
describe('Funcionalidade Pre-cadastro', () => {

    beforeEach(() => {
        cy.visit('minha conta')

    });

    it('deve ser criado o pré cadastro com sucesso - Usando comandos customizados', () => {
        // criado um comando customizado chamado de precaddastro
        cy.preCadastro(email, senha, nome, sobrenome)
        //Resultado esperado
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')

    })
});




