/// <reference types="Cypress-xpath" />
it.skip('Alerts example',()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get(':nth-child(1) > button').click()
    cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')
    })
    //alert windows automatically closed by cypress
    cy.get('#result').should('have.text','You successfully clicked an alert')
    
})
    // javascript conform alert:It will have some text with"ok" and "cancel" buttons
    it.only('js conforms alerts',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        //cypress automatically  windows by using ok button-default
        cy.get('#result').should('have.text','You clicked: Ok')
    })