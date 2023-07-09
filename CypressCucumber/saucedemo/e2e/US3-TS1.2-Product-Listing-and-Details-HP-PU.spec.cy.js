describe('Product Listing and Details|Happy Path|Problem User', () => {
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

      // Click on the item
      cy.get('#item_0_title_link > .inventory_item_name').click();

      // Click on the product description 
      cy.get('.inventory_details_desc').click()
      .invoke('text')
      // Assert that the product description contains a function()
      .should('not.match', /\(.*\)/s);

    })
})  