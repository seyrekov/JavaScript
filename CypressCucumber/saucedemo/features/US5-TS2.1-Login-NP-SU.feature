Feature: Login Functionality - Negative Path - Standard User

Scenario: Standard User login attempt with incorrect password
  Given the user is on the Sauce Demo website
  When the user enters the username "standard_user"
  And the user enters an incorrect password
  And the user clicks the login button
  Then an error message should be displayed
  And the inventory container should not be visible