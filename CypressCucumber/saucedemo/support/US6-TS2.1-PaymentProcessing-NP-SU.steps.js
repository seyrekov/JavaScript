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

When('the user enters the last name {string}', (lastName) => {
  // Cypress code to enter the last name
  cy.get('[data-test="lastName"]').clear().type(lastName);
});

When('the user clears the postal code field', () => {
  // Cypress code to clear the postal code field
  cy.get('[data-test="postalCode"]').clear();
});

When('the user continues to the next step', () => {
  // Cypress code to continue to the next step
  cy.get('[data-test="continue"]').click();
});

Then('an error message for the Postal Code field should be displayed', () => {
  // Cypress code to assert the error message for the Postal Code field
  cy.contains('Error: Postal Code is required').should('be.visible');
});