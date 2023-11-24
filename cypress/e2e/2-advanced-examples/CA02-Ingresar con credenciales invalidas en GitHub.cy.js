describe('CA02 - Ingresar con credenciales invalidas en GitHub', () => { //Nombre del Caso de Prueba Automático


    //Validación de elementos en interfaz principal GitHub
    it('Validar interfaz de GitHub', () => {
      cy.visit('https://github.com/login')
      cy.get('.container').should("be.visible")
      cy.get('h1').contains("Sign in to GitHub")           //Título de página Sign in to GitHub
  
    })
  
    //Login erróneo GitHub
    it('Ingresar con credenciales validas en GitHub', () => {
      cy.visit('https://github.com/login')            //URL login GitHub
      cy.get('[for="login_field"]')                   //Campo Usuario
      cy.get('#login_field').type("usuarioX")         //Input U
      cy.get('#forgot-password')                      //Btn Olv Contraseña
      cy.get('.position-relative > label')            //Campo Contraseña
      cy.get('#password').type("111111")              //Input P
      cy.get('.position-relative > .btn').click()     //Btn Sign in
  
    //Mensaje de error al ingresar en GitHub
      cy.get('.js-flash-alert').should("be.visible")      //Mensaje de credenciales incorrectas 
      cy.get('.px-2 > .flash-close').should("be.visible") //Icono de cierre de error visualizado
      cy.get('.js-flash-alert').contains("Incorrect username or password")  //Mensaje de error
      
    })
       
       
  })