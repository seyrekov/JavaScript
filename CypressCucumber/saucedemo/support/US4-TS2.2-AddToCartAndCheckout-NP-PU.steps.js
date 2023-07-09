const { Given, When, Then } = require('cucumber');

Given('the user is on the Sauce Demo website', () => {
  // Cypress code to visit the website
  cy.visit('https://www.saucedemo.com');
});

When('the user enters the username {string}', (username) => {
  // Cypress code to enter the username
  cy.get('#user-name').type(username);
});

When('the user enters the password {string}', (password) => {
  // Cypress code to enter the password
  cy.get('#password').type(password);
});

When('the user clicks the login button', () => {
  // Cypress code to click the login button
  cy.get('#login-button').click();
});

Then('the user should be redirected to the inventory page', () => {
  // Cypress code to verify the URL after successful login
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
});

Then('the inventory container should be visible', () => {
  // Cypress code to assert the visibility of the inventory container
  cy.get('.inventory_container').should('exist');
});

When('the user adds an item to the cart', () => {
  // Cypress code to add an item to the cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('the user goes to the shopping cart', () => {
  // Cypress code to go to the shopping cart
  cy.get('.shopping_cart_link').click();
});

Then('the basket icon should show one product', () => {
  // Cypress code to assert the presence of the product count in the basket icon
  cy.get('.shopping_cart_badge').should('have.text', '1');
});

When('the user removes the item from the cart', () => {
  // Cypress code to remove the item from the cart
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

Then('the basket icon should be empty', () => {
  // Cypress code to assert the absence of the product count in the basket icon
  cy.get('.shopping_cart_link .shopping_cart_badge').should('not.exist');
});

When('the user proceeds to checkout', () => {
  // Cypress code to proceed to checkout
  cy.get('[data-test="checkout"]').click();
});