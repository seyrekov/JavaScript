Feature: Payment Processing - Happy Path - Standard User

Scenario: Standard User completes the payment process
  Given the user is on the Sauce Demo website
  When the user enters the username "standard_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible
  When the user adds an item to the cart
  And the user goes to the shopping cart
  And the user proceeds to checkout
  And the user enters the first name "R"
  And the user enters the last name "S"
  And the user enters the postal code "1000"
  And the user continues to the next step
  And the user completes the purchase
  And the user goes back to the products page