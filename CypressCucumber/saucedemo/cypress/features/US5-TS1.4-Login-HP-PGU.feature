Feature: Login Functionality - Happy Path - Performance Glitch User

Scenario: Performance Glitch User login attempt
  Given the user is on the Sauce Demo website
  When the user enters the username "performance_glitch_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible