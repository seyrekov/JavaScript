describe('Payment Processing|Happy Path|Standard User', () => {
    it('passes', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com');
  
      // Enter username
      cy.get('#user-name').type('standard_user');
  
      // Enter password
      cy.get('#password').type('secret_sauce');
  
      // Click login button
      cy.get('#login-button').click();
  
      // Verify that the user is redirected to the inventory page
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  
      // Assert that the inventory container is visible after successful login
      cy.get('.inventory_container').should('exist');
      
      // Add an item to the cart
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
      // Go to the shopping cart
      cy.get('.shopping_cart_link').click();

      // Proceed to checkout
      cy.get('[data-test="checkout"]').click();

      // Enter the first name
      cy.get('[data-test="firstName"]').clear().type('R');

      // Enter the last name
      cy.get('[data-test="lastName"]').clear().type('S');

      // Enter the postal code
      cy.get('[data-test="postalCode"]').clear().type('1000');

      // Continue to the next step
      cy.get('[data-test="continue"]').click();

      // Complete the purchase
      cy.get('[data-test="finish"]').click();

      // Go back to the products page
      cy.get('[data-test="back-to-products"]').click();

    })
  })