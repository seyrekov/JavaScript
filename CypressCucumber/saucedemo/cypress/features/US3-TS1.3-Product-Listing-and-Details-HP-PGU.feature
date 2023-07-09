Feature: Product Listing and Details - Happy Path - Performance Glitch User

Scenario: User navigates to product listing and details as a performance glitch user
  Given the user is on the Sauce Demo website
  When the user enters the username "performance_glitch_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible
  And the user clicks on the item
  And the user clicks on the product description
  Then the product description should not contain a function()