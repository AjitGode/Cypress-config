/// <reference types="cypress" />

describe('Verify the login functionality',()=>{
    it.only('verify login',()=>{
      // cy.visit('/Datepicker/index.html')
     let baseUrl = Cypress.config().baseUrl
     cy.visit(baseUrl)
    })
    it('verify login',()=>{
        cy.visit('/Login-Portal/index.html')
     })
})