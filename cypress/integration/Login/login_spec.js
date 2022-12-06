/// <reference types="cypress" />

describe('Verify the login functionality',()=>{
    let baseUrl = Cypress.config().baseUrl
    it.only('verify login',()=>{
      // cy.visit('/Datepicker/index.html')
     
     cy.visit(baseUrl)
    })
    it('verify login',()=>{
        cy.visit(baseUrl)
     })
})