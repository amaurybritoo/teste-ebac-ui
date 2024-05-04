/// <reference types="cypress"/>

import enderecoPage from '../support/page-obects/endereco.page';

const perfil = require('../fixtures/perfil.json')

const dadosEndereco = require('../fixtures/enderecoFaturamento.json')

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

    it('Deve fazer o cadastro de faturamento - usando parametros FAKES', () => {
        enderecoPage.editarEnderecoFaturamento(nome, sobrenome, "EBAC", "Brasil", rua, numero, cidade, estado, '69005-330', cel, email)

        //resultado esperado
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });

    it('Deve fazer o cadastro de faturamento - Usando a massa de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].rua,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].cel,
            dadosEndereco[0].email)

        //resultado esperado
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });

    it.only('Deve fazer o cadastro de Endereço para envio', () => {
        //exercicio
        //criar os metodos e ações no page object
        //criar a massa de dados
        enderecoPage.editarEnderecoEntrega(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].rua,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep

        )

        //Resultado esperado
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});