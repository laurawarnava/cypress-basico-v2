/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'teste, teste, teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, testeteste, testeteste, teste teste, testeteste, teste'
        cy.get('#firstName').type('Laura')
        cy.get('#lastName').type('Warnava')
        cy.get('#email').type('laurateste@teste.com')
        cy.get('#open-text-area').type(longText, {
            delay: 0
        })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Laura')
        cy.get('#lastName').type('Warnava')
        cy.get('#email').type('laurateste@teste,com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
})