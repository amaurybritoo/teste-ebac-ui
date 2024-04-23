//referenciar o cypress para que o arquivo entenda que vai ser usado metodos do cypress
/// <reference types='cypress'/>  

//criar um contexto do projeto usando o context()
context('Funcionalidade Login', () => {
  //caminho feliz - usuario: aluno_ebac@teste.com senha:teste@teste.com
  it('deve fazer login com sucesso', () => {

    //Entrar no site
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

    //captura de elementos + ação
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    //Resultado esperado
    cy.get('.page-title').should('contain','Minha conta') //validar texto e comprove o resultado esperado 
  })

  it('deve exibir uma mesagem de erro ao inserir o Usuário/Email invalido', () => {
    
    //Entrar no site
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

    //captura de elemeto + ação
    cy.get('#username').type('aluno_ebacteste.com') 
    cy.get('#password').type('teste@teste.com') 
    cy.get('.woocommerce-form > .button').click() 

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain','não está registrado neste site')

  })

  it('deve exibir uma mesagem de erro ao inserir a Senha invalida', () => {
    
    //Entrar no site
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

    //captura de elemeto + ação
    cy.get('#username').type('aluno_ebac@teste.com') 
    cy.get('#password').type('1234') 
    cy.get('.woocommerce-form > .button').click() 

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain','senha')
    cy.get('.woocommerce-error').should('contain','está incorreta')

  })

  it('deve exibir uma mesagem de erro ao deixar campo de Usuário/Email vazio', () => {
    
    //Entrar no site
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

    //captura de elemeto + ação
    cy.get('#username').type('  ') 
    cy.get('#password').type('123') 
    cy.get('.woocommerce-form > .button').click() 

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain','Nome de usuário é obrigatório')

  })

  it('deve exibir uma mesagem de erro ao deixar campo de Senha vazio', () => {
    
    //Entrar no site
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

    //captura de elemeto + ação
    cy.get('#username').type('aluno_ebac@teste.com') 
    cy.get('#password').type('   ') 
    cy.get('.woocommerce-form > .button').click() 

    //Resultado esperado
    cy.get('.woocommerce-error').should('contain','campo da senha está vazio')

  })
})


// it.only <- isola o caso e testa somente ele
//it.skip <- pula um caso de teste

