@account-creation-and-login
Feature: Account creation and login

As a user, 
  I want to be able to create an account and
  log in to the Luma website easily, so that
  I can view my order history and make future 
  purchases more conveniently.

Scenario: Test the account creation process and verify that users can create accounts (happy path).

  Given the user is on the home page of the Luma website
  When they click on "Create an Account" link
  And they fill inputs in the registration form: 
  "First Name", "Last Name", "Email", "Password", "Confirm Password"
  And they submit the form with click on "Create and Account" button
  Then they should be redirected to the home page of the registered customer