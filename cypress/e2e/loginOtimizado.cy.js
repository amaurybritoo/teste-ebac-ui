//referenciar o cypress para que o arquivo entenda que vai ser usado metodos do cypress
/// <reference types='cypress'/>  

//cria uma constante para armazenar o objeto criado na fixture
const perfil = require('../fixtures/perfil.json')

//criar um contexto do projeto usando o context()
context('Funcionalidade Login', () => {

  beforeEach(() => {
    //Entrar no site, nao precisa por o dominio, pois ja esta no baseUrl no cypress.config.js
    cy.visit('my-account')
  });

  //afterEach(() => {
  //tira um print após cada teste
  //cy.screenshot()
  //});


  //caminho feliz - usuario: aluno_ebac@teste.com senha:teste@teste.com
  it('deve fazer login com sucesso', () => {

    //captura de elementos + ação
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    //Resultado esperado
    cy.get('.page-title').should('contain', 'Minha conta') //validar texto e comprove o resultado esperado 
  })

  //faz o caminho feliz usando a base de dados criada na fixture
  it('deve fazer o login com sucesso - usando a massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
  });

  //faz o caminho feliz usando o cy.fixtures
  it.only('deve fazer login com sucesso usando o cy.fixtures', () => {

    //cypress vai puxar o arquivo (no caso 'perfil') da pasta fixture
    //then é um metodo que Ele vai carregar a massa de dados "cy.fixture('perfil')" e ENTAO(then) ele vai fazer as ações do teste
    //dados é uma variavel criada para armazenar tudo que está dentro do arquivo (no caso 'perfil')
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)

      //,{log:false} <- deixa o conteudo oculto na execução
      cy.get('#password').type(dados.senha, { log: false })
      cy.get('.woocommerce-form > .button').click()
    });
  })

  it('deve exibir uma mesagem de erro ao inserir o Usuário/Email invalido', () => {

    //captura de elemeto + ação
    cy.get('#username').type('aluno_ebacteste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain', 'não está registrado neste site')

  })

  it('deve exibir uma mesagem de erro ao inserir a Senha invalida', () => {

    //captura de elemeto + ação
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('1234')
    cy.get('.woocommerce-form > .button').click()

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain', 'senha')
    cy.get('.woocommerce-error').should('contain', 'está incorreta')

  })

  it('deve exibir uma mesagem de erro ao deixar campo de Usuário/Email vazio', () => {

    //captura de elemeto + ação
    cy.get('#username').type('  ')
    cy.get('#password').type('123')
    cy.get('.woocommerce-form > .button').click()

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain', 'Nome de usuário é obrigatório')

  })

  it('deve exibir uma mesagem de erro ao deixar campo de Senha vazio', () => {

    //captura de elemeto + ação
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('   ')
    cy.get('.woocommerce-form > .button').click()

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain', 'campo da senha está vazio')

  })
})



//it.only <- isola o caso e testa somente ele
//it.skip <- pula um caso de teste

