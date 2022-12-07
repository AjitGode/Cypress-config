/// <reference types="cypress" />

import{Utility} from "../../support/utility"

describe('Verify the login functionality',()=>{
    //let baseUrl = Cypress.config().baseUrl
    // it.only('verify login',()=>{
    //   // cy.visit('/Datepicker/index.html')
     
    //  cy.visit(baseUrl)
    // })
    // it('verify login',()=>{
    //     //cy.visit('/Login-Portal/index.html')
    //  })

     it('verify ENV ',()=>{
      let url = new Utility().getBaseUrl()
      //let url = a.getBaseUrl()

      cy.visit(url)
        
     })
})