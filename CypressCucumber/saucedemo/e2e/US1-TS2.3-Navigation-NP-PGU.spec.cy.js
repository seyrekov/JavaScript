describe('Navigation|Negative Path|Performance Glitch User', () => {
    it('passes', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com');

      // Enter username
      cy.get('#user-name').type('performance_glitch_user');

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

      // Assert that the button label changes to "Remove" after adding the item to the cart
      cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
      
      // Open the burger menu
      cy.get('#react-burger-menu-btn').click();

      // Assert that the button label changes back to "Add to cart" after resetting the sidebar
      cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.have.text', 'Add to cart');
      
      // Reset the sidebar
      cy.get('#reset_sidebar_link').click();
      
      // Assert that the button label changes back to "Add to cart" after resetting the sidebar
      cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.have.text', 'Add to cart');
      
      // Remove the item from the cart
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      
      // Assert that the button label changes back to "Add to cart" after resetting the sidebar
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart');
    
    })
  })