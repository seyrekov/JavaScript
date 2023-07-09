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

Then('the button label should change to {string}', (buttonLabel) => {
  // Cypress code to assert the button label after adding an item to the cart
  cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', buttonLabel);
});

When('the user opens the burger menu', () => {
  // Cypress code to open the burger menu
  cy.get('#react-burger-menu-btn').click();
});

Then('the button label should change back to {string}', (buttonLabel) => {
  // Cypress code to assert the button label after resetting the sidebar
  cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.have.text', buttonLabel);
});

When('the user resets the sidebar', () => {
  // Cypress code to reset the sidebar
  cy.get('#reset_sidebar_link').click();
});

When('the user removes the item from the cart', () => {
  // Cypress code to remove the item from the cart
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

When('the user goes to the shopping cart', () => {
  // Cypress code to go to the shopping cart
  cy.get('.shopping_cart_link').click();
});

When('the user goes back to the product page', () => {
  // Cypress code to go back to the product page
  cy.get('#continue-shopping').click();
});

Then('the button label should change back to {string}', (buttonLabel) => {
  // Cypress code to assert the button label after resetting the sidebar
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', buttonLabel);
});