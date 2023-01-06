Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('[id="firstName"]').type('Leonardo');
    cy.get('#lastName').type('Freitas');
    cy.get('#email').type('leo@teste.com.br');

    cy.get('#open-text-area').type('Teste de spec Cypress', { delay: 0});

    cy.get('.button').click();
})

