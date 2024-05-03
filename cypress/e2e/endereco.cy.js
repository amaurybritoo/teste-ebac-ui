/// <reference types="cypress"/>

import enderecoPage from '../support/page-obects/endereco.page';

const perfil = require('../fixtures/perfil.json')

//usando a lib faker
var faker = require('@faker-js/faker')

//criando as constantes fakes
const nome = faker.fakerPT_BR.person.firstName("male")
const sobrenome = faker.fakerPT_BR.person.lastName("male")
const email = faker.fakerPT_BR.internet.email(nome, sobrenome)
const estado = faker.fakerPT_BR.location.state()
const numero = faker.fakerPT_BR.number.int(53)
const cidade = faker.fakerPT_BR.location.city()
const rua = faker.fakerPT_PT.location.street()
const cel = faker.fakerPT_BR.phone.number()

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {

    beforeEach(() => {
        //Entra na aba da minha conta e preenche com login e senha 
        cy.visit('minha conta')
        cy.login(perfil.usuario, perfil.senha)
        //entra direto na aba de Endereço
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    });

    it('Deve fazer o cadastro de faturamento', () => {
        enderecoPage.editarEnderecoFaturamento(nome,sobrenome,"EBAC","Brasil",rua, numero, cidade,estado, '69005-330', cel,email)

        //resultado esperado
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });
});