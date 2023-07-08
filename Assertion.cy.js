describe('assertion test', ()=>{
            
        it("Implicit assertion", ()=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            //should    and
          //  cy.url().should('include','orangehrmlive.com')
            //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            //.should('contain','orangehrm')
            
            
            cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('not.contain','orangvvehrm')
            cy.title().should('include','Orange')
            cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')
            
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')

        })
        it("explicit assertion", ()=>{

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
       cy.get('.oxd-button').click()
       cy.get('/a').should('have.length',5)

       let expName="PaulArjunVRao Collings";
       cy.get('.oxd-userdropdown-name').then((x)=>{

        let actName=x.text()
        expect(actName).to.equal(expName)
       })






        })
    })