describe('CA01 - Ingresar exitosamente en Refactor DEMO', () => { //Nombre del Caso de Prueba Automático


  //Validación de elementos en interfaz principal DEMO Refactor
  it('Validar interfaz de DEMO', () => {
    cy.visit('https://refactor.qa.idnowlab.com/security-services/demo/')
    cy.get('#btnStart').should("be.visible")
    

  })

  //Login DEMO Refactor
  it('Ingresar con credenciales validas en DEMO', () => {
    cy.visit('https://refactor.qa.idnowlab.com/security-services/demo/') 
    //cy.xpath('/html/body/ui-view/ui-view/div/div/div/div/div/div/form[1]/div/div[1]/input')           //URL login GitHub
    //cy.get('[for="login_field"]')                   //Campo Usuario
    //cy.get('#login_field').type("marcosdmarin")     //Input U
    //cy.get('#forgot-password')                      //Btn Olv Contraseña
    //cy.get('.position-relative > label')            //Campo Contraseña
    //cy.get('#password').type("Md21156365")          //Input P
    //cy.get('.position-relative > .btn').click()     //Btn Sign in

  //Ingreso exitoso en DEMO Refactor
    cy.get('h1').should("be.visible")          //Ticnow Identity
    cy.get('h2').contains("One")        //Título One login for
    cy.get('#txtLicense').should("be.visible")                //Licencia demo code
    cy.get('#sdkLicense').should("be.visible")                //Licencia sdk web
    cy.get('#btnStart').click() //Click en Start Secure Session
  })
     
     
})