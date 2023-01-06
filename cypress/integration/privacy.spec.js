//a biblioteca Lodash (Cypress._), representada pelo underline, já se faz presente no Cypress sem precisar importa-la
// ela possui alguma funcionalidades que auxiliam no desenvovlimento dos teste, como a .times, que faz a repetição do teste
// executado dentro da callback 5 vezes.

Cypress._.times( 5, () => {
    it('testa a página da política de privacidade de forma independente', function () {
        cy.visit('./src/privacy.html');
    
        cy.contains('Talking About Testing').should('be.visible')
    })
})