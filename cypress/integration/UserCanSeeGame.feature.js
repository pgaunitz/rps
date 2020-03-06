describe('User can see all the elements on page', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('Displays a title', () => {
        cy.get('#game-title').should('contain', 'Rock Paper Scissors Game')
    })

    
    it('Can Click the buttons', () => {
        cy.get('button#rock-button').click();
        cy.get('button#paper-button').click();
        cy.get('button#scissors-button').click();
        
    });

    describe('User can play game', () => {
        before(() => {
            cy.visit('/');
            cy.get('button#rock-button').clock();

        })
        it
    })
    


   
})