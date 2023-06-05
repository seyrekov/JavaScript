describe('Login Functionality|Happy Path|Problem User', () => {
    it('passes', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com');
      
      // Enter username
      cy.get('#user-name').type('problem_user');
      
      // Enter password
      cy.get('#password').type('secret_sauce');
        
      // Click login button
      cy.get('#login-button').click();
  
      // Verify that the user is redirected to the inventory page
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
      
      // Assert that the inventory container is visible after successful login
      cy.get('.inventory_container').should('exist');
     
    })
  })