describe('Add to Cart and Checkout|Negative Path|Problem User', () => {
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
      
      // Add an item to the cart
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
      // Go to the shopping cart
      cy.get('.shopping_cart_link').click();

      // Assert that the basket icon shows one product
      cy.get('.shopping_cart_badge').should('have.text', '1');

      // Remove the item from the cart
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();

      // Go to the shopping cart
      cy.get('.shopping_cart_link').click();

      // Assert that the basket icon is empty when there are no products
      cy.get('.shopping_cart_link .shopping_cart_badge').should('not.exist');

      // Proceed to checkout
      cy.get('[data-test="checkout"]').click();

    })
  })