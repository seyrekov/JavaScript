const { Given, When, Then } = require('cucumber');

Given('the user is on the Sauce Demo website', () => {
  // Cypress code to visit the website
  cy.visit('https://www.saucedemo.com');
});

When('the user enters the username {string}', (username) => {
  // Cypress code to enter the username
  cy.get('#user-name').type(username);
});

When('the user enters an incorrect password', () => {
  // Generate a random incorrect password
  const incorrectPassword = generateRandomPassword();

  // Cypress code to enter the incorrect password
  cy.get('#password').type(incorrectPassword);
});

When('the user clicks the login button', () => {
  // Cypress code to click the login button
  cy.get('#login-button').click();
});

Then('an error message should be displayed', () => {
  // Cypress code to verify the error message is displayed
  cy.get('.error-message-container')
    .should('be.visible')
    .contains('Epic sadface: Username and password do not match any user in this service');
});

Then('the inventory container should not be visible', () => {
  // Cypress code to assert the invisibility of the inventory container
  cy.get('.inventory_container').should('not.exist');
});

// Function to generate a random password
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}