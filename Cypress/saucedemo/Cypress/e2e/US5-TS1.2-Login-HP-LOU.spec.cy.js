describe('Login Functionality|Happy Path|Locked Out User', () => {
    it('passes', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com');
      
      // Enter username
      cy.get('#user-name').type('locked_out_user');
      
      // Enter password
      cy.get('#password').type('secret_sauce');
        
      // Click login button
      cy.get('#login-button').click();
  
      // Verify that the error message for locked out user is displayed
      cy.get('.error-message-container')
        .should('be.visible')
        .contains('Epic sadface: Sorry, this user has been locked out');

      // Assert that the inventory container is not visible
      cy.get('.inventory_container').should('not.exist');
     
    })
  })