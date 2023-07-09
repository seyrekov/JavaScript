describe('Login Functionality|Negative Path|Performance Glitch User', () => {
    it('fails with incorrect password', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com');
  
      // Enter username
      cy.get('#user-name').type('performance_glitch_user');
  
      // Generate a random incorrect password
      const incorrectPassword = generateRandomPassword();
  
      // Enter the incorrect password
      cy.get('#password').type(incorrectPassword);
  
      // Click login button
      cy.get('#login-button').click();
  
      // Verify that the error message is displayed
      cy.get('.error-message-container')
        .should('be.visible')
        .contains('Epic sadface: Username and password do not match any user in this service');
  
      // Assert that the inventory container is not visible
      cy.get('.inventory_container').should('not.exist');
    });
  });
  
  // Function to generate a random password
  function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  }
  