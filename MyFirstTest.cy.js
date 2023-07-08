
describe('My First Test', function() 
{
    it('Test1', () => {
        cy.visit('https://demo.qa.hisaav.com/login')
        cy.get(':nth-child(1) > .input-field').type('9865103903')
        cy.get('.password-area > .input-field').type('12345')
        cy.get('.main-button').click()
       cy.title().should('include', 'Hisaav')
        cy.get('.logo-section > .extra-small-title').should('be.visible')
       
        
    })
  })