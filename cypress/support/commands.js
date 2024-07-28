Cypress.Commands.add('checkBrokerDetails', (broker) => {
  cy.get('.MuiGrid-root .MuiCardContent-root h6').should('contain', broker.name);
  cy.get('.MuiGrid-root .MuiCardContent-root span').should('contain', broker.address);
  cy.get('.MuiGrid-root .MuiTypography-root').should('contain', broker.properties)
  
  if (broker.mobile) {
    cy.get('.MuiGrid-root .MuiStack-root a').should('contain', broker.mobile);
  } else {
    cy.get('.MuiGrid-root .MuiStack-root a').should('not.contain', broker.mobile);
    const mobileMessage = `Broker ${broker.name} does not have a mobile number.`;
    cy.task('failTest', mobileMessage);
    console.warn(mobileMessage);
  }

  if (broker.landline) {
    cy.get('.MuiGrid-root .MuiStack-root a').should('contain', broker.landline);
  } else {
    cy.get('.MuiGrid-root .MuiStack-root a').should('not.contain', broker.landline);
    const landlineMessage = `Broker ${broker.name} does not have a landline number.`;
    cy.task('failTest', landlineMessage);
    console.warn(landlineMessage);
   
  }
});