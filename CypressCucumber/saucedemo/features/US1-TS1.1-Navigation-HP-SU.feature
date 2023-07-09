Feature: Navigation - Happy Path - Standard User

Scenario: User successfully navigates through the website
  Given the user is on the Sauce Demo website
  When the user enters the username "standard_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible
  And the user clicks on an item
  And the user goes back to the product page
  Then the user should be redirected to the inventory page again
  And the inventory container should still be visible