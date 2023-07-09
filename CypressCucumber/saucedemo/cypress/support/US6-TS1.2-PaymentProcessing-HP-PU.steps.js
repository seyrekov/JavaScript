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
  // Cypress code to verify the redirection to the inventory page
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

When('the user proceeds to checkout', () => {
  // Cypress code to proceed to checkout
  cy.get('[data-test="checkout"]').click();
});

When('the user enters the first name {string}', (firstName) => {
  // Cypress code to enter the first name
  cy.get('[data-test="firstName"]').clear().type(firstName);
});

When('the user clears the last name field', () => {
  // Cypress code to clear the last name field
  cy.get('[data-test="lastName"]').clear();
});

When('the user enters the postal code {string}', (postalCode) => {
  // Cypress code to enter the postal code
  cy.get('[data-test="postalCode"]').clear().type(postalCode);
});

When('the user continues to the next step', () => {
  // Cypress code to continue to the next step
  cy.get('[data-test="continue"]').click();
});

Then('the error message for the Last Name field should be displayed', () => {
  // Cypress code to assert the visibility of the error message
  cy.contains('Error: Last Name is required').should('be.visible');
});