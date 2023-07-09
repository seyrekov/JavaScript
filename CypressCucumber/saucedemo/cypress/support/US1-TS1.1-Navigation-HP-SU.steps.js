import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the Sauce Demo website', () => {
  cy.visit('https://www.saucedemo.com');
});

When('the user enters the username {string}', (username) => {
  cy.get('#user-name').type(username);
});

And('the user enters the password {string}', (password) => {
  cy.get('#password').type(password);
});

And('the user clicks the login button', () => {
  cy.get('#login-button').click();
});

Then('the user should be redirected to the inventory page', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
});

And('the inventory container should be visible', () => {
  cy.get('.inventory_container').should('exist');
});

And('the user clicks on an item', () => {
  cy.get('#item_4_title_link > .inventory_item_name').click();
});

And('the user goes back to the product page', () => {
  cy.get('[data-test="back-to-products"]').click();
});

Then('the user should be redirected to the inventory page again', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
});

And('the inventory container should still be visible', () => {
  cy.get('.inventory_container').should('exist');
});