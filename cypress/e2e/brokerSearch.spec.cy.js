describe('Broker Search', () => {
    const brokers = require('../fixtures/broker-list.json');
    // const city = Cypress.env('city');
  
    brokers.forEach(broker => {
      it(`Should display correct details for ${broker.name}`, () => {
        cy.visit('/broker?city=Sofia');
        cy.get('#broker-keyword').type(broker.name);
        cy.wait(1000)
        // Verify only one result is displayed
        cy.get('.MuiGrid-item').should('have.length', 1);
        cy.get('.MuiButton-textDarkBlue').click();
        // Call CheckBrokerDetail commands and Verify broker details
        cy.checkBrokerDetails(broker);
      
      });
    });
  });