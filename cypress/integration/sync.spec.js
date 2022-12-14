/// <reference types="cypress"/>

describe('Sync...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento esta disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })
    it.only('Uso do find..', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
/* 
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')    */ 
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })
    it.only('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist')

        // cy.get('#buttonListDOM').click()
        // //cy.wait(5000)
        // cy.get('#lista li span', {timeout: 30000})
        //     .should('contain', 'Item 2')
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)    

    })
    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '1')
    })
    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            console.log($el)
            expect($el).to.have.length(1)
        })
    })
})