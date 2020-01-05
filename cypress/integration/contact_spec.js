import TestIds from '../../src/core/config/test-ids'

context('Given a contact page...', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.getTestId(TestIds.linkContactMainBar).click()
    })

    it('You can send a message', () => {
        cy.getTestId(TestIds.msgContactForm).should('not.exist')

        cy.getTestId(TestIds.nameInputContactForm).type('test')
        cy.getTestId(TestIds.mailInputContactForm).type('test@test.com')
        cy.getTestId(TestIds.contactInputContactForm).type('test test test')
        cy.getTestId(TestIds.btnContactForm).click()

        cy.getTestId(TestIds.msgContactForm).should('exist')
    })

    it('You can send several messages', () => {
        cy.getTestId(TestIds.nameInputContactForm).type('test')
        cy.getTestId(TestIds.mailInputContactForm).type('test@test.com')
        cy.getTestId(TestIds.contactInputContactForm).type('test test test')
        cy.getTestId(TestIds.btnContactForm).click()

        cy.getTestId(TestIds.btnSendMsgContactForm).click()

        cy.getTestId(TestIds.nameInputContactForm).type('test2')
        cy.getTestId(TestIds.mailInputContactForm).type('test2@test.com')
        cy.getTestId(TestIds.contactInputContactForm).type('test2 test2 test2')
        cy.getTestId(TestIds.btnContactForm).click()

        cy.getTestId(TestIds.msgContactForm).should('exist')
    })

    it('You cannot send a message with wrong mail', () => {
        cy.getTestId(TestIds.nameInputContactForm).type('test')
        cy.getTestId(TestIds.mailInputContactForm).type('test')
        cy.getTestId(TestIds.contactInputContactForm).type('test test test')
        cy.getTestId(TestIds.btnContactForm).click()

        cy.getTestId(TestIds.msgContactForm).should('not.exist')
        cy.getTestId(TestIds.mailHintContactForm).contains('mail must be a valid email')
    })

    it('you cannot send a message unless you type the mandatory fields', () => {
        cy.getTestId(TestIds.mailInputContactForm).type('test2@test.com')
        cy.getTestId(TestIds.btnContactForm).click()

        cy.getTestId(TestIds.msgContactForm).should('not.exist')
        cy.getTestId(TestIds.nameHintContactForm).contains('The user is required')
        cy.getTestId(TestIds.contactHintContactForm).contains('The content is required')
    })

})