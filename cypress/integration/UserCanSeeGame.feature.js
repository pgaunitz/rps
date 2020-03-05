describe('User can see all the elements on page', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('Displays a title', () => {
        cy.get('#game-title').should('contain', 'Rock Paper Scissors Game')
    })

    // it('Displays a rock, paper, scissor buttons', () => {
    //     cy.get('#rock').should('exist');
    //     cy.get('#paper').should('exist');
    //     cy.get('#scissors').should('exist');
    // })
    it('Can Click the buttons', () => {
        cy.get('button#rock-button').click();
        cy.get('button#paper-button').click();
        cy.get('button#scissors-button').click();
        // cy.get('button#playagain-button').click();
    });


   
})