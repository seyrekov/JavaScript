Feature: Login Functionality - Happy Path - Locked Out User

Scenario: Locked Out User login attempt
  Given the user is on the Sauce Demo website
  When the user enters the username "locked_out_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the error message for locked out user should be displayed
  And the inventory container should not be visible