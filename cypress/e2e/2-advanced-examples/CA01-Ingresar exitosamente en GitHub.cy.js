describe('CA01 - Ingresar exitosamente en GitHub', () => { //Nombre del Caso de Prueba Automático


  //Validación de elementos en interfaz principal GitHub
  it('Validar interfaz de GitHub', () => {
    cy.visit('https://github.com/login')
    cy.get('.container').should("be.visible")
    cy.get('h1').contains("Sign in to GitHub")           //Título de página Sign in to GitHub

  })

  //Login GitHub
  it('Ingresar con credenciales validas en GitHub', () => {
    cy.visit('https://github.com/login')            //URL login GitHub
    cy.get('[for="login_field"]')                   //Campo Usuario
    //cy.xpath('/html/body/div[1]/div[3]/main/div/div[3]/form/input[2]').type("marcosdmarin")
    cy.get('#login_field').type("marcosdmarin")     //Input U
    cy.get('#forgot-password')                      //Btn Olv Contraseña
    cy.get('.position-relative > label')            //Campo Contraseña
    cy.get('#password').type("Md21156365")          //Input P
    cy.get('.position-relative > .btn').click()     //Btn Sign in

  //Ingreso exitoso en Home GitHub
    cy.get('.AppHeader-context-item-label').should("be.visible")          //Texto Dashboard
    cy.get('feed-container > :nth-child(1) > h3').contains("Home")        //Título Home
    cy.get('.Button-label > .avatar').should("be.visible")                //Avatar Usuario
    cy.get('.flex-justify-between.flex-items-center > :nth-child(2) > a').click() //Click en FB
    cy.get('.AppHeader-context-item-label').contains("community")                //Página Community
    
  })
     
     
})