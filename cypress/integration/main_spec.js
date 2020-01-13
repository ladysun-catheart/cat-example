import TestIds from '../../src/core/config/test-ids'

context('Given a main page...', () => {

    beforeEach(function () {
        cy.visit('http://localhost:3000')
    })

    it('There is a table, the toolbar and no cat description', () => {
        cy.getTestId(TestIds.btnInsertToolbar).should('exist')
        cy.getTestId(TestIds.searchToolbar).should('exist')
        cy.getTestId(TestIds.catInfoMainFilled).should('not.exist')
        cy.getTestId(TestIds.catInfoMainEmpty).should('exist')
        cy.getTestId(TestIds.catListMain).should('exist')
        cy.getTestId(TestIds.catActionsMain).should('exist')
    })

    it('You can select a cat to see its description', () => {
        cy.getTestId(TestIds.catListMain)
            .wait(3000)
            .getTestId(`${TestIds.catListMain}-row`)
            .first()
            .click()
        cy.getTestId(TestIds.catInfoMainFilled).should('exist')
    })

    it('You can search cats', () => {
        cy.getTestId(TestIds.inputSearchToolbar).type('porro')
        cy.getTestId(TestIds.btnSearchToolbar).click()
    })

    it('You can download cat info', () => {
        cy.getTestId(TestIds.catListMain)
            .wait(3000)
            .getTestId(`${TestIds.catListMain}-row`)
            .first()
            .click()
        cy.getTestId(TestIds.radioJsonCatActionsMain).click()
        cy.getTestId(TestIds.btnOneCatActionsMain).click()
    })

})