describe('CA03 - Login en Davivienda Admin ID-Now', () => { //Nombre del Caso de Prueba Automático


    //Validación de elementos en Login Davivienda
    it('Validar interfaz de Login Davivienda', () => {
      cy.visit('https://lab-bmtr-api.dvpapps.io/id-now-admin/app.html?v=20200508#!/login')
      cy.get('.container').should("be.visible")
      cy.get('h1').contains("Administracion ID-NOW")           //Título de página Sign in to GitHub
  
    })
  
    //Login GitHub
    it('Ingresar con credenciales validas en GitHub', () => {
      cy.visit('https://github.com/login')            //URL login GitHub
      cy.get('[for="login_field"]')                   //Campo Usuario
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