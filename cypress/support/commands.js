Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Laura')
    cy.get('#lastName').type('Warnava')
    cy.get('#email').type('laurateste@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})