Feature: Login Functionality - Happy Path - Standard User

Scenario: Standard User logs in successfully
  Given the user is on the Sauce Demo website
  When the user enters the username "standard_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible after successful login