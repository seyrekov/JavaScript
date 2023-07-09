Feature: Payment Processing - Negative Path - Standard User

Scenario: Standard User encounters an error during payment
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
  And the user clears the postal code field
  And the user continues to the next step
  Then an error message for the Postal Code field should be displayed