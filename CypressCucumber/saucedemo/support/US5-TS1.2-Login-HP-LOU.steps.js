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

Then('the error message for locked out user should be displayed', () => {
  // Cypress code to verify the error message for locked out user
  cy.get('.error-message-container')
    .should('be.visible')
    .contains('Epic sadface: Sorry, this user has been locked out');
});

Then('the inventory container should not be visible', () => {
  // Cypress code to assert the visibility of the inventory container
  cy.get('.inventory_container').should('not.exist');
});