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

When('the user clicks on an item', () => {
  // Cypress code to click on an item
  cy.get('#item_4_title_link > .inventory_item_name').click();
});

When('the user goes back to the product page', () => {
  // Cypress code to go back to the product page
  cy.get('[data-test="back-to-products"]').click();
});

Then('the inventory container should still be visible', () => {
  // Cypress code to assert the visibility of the inventory container
  cy.get('.inventory_container').should('exist');
});