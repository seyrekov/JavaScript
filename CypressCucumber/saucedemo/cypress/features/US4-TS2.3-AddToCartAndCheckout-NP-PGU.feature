Feature: Add to Cart and Checkout - Negative Path - Performance Glitch User

Scenario: User adds an item to the cart and proceeds to checkout as a performance glitch user, then removes the item from the cart
  Given the user is on the Sauce Demo website
  When the user enters the username "performance_glitch_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible
  And the user adds an item to the cart
  And the user goes to the shopping cart
  And the basket icon should show one product
  And the user removes the item from the cart
  And the user goes to the shopping cart
  And the basket icon should be empty
  And the user proceeds to checkout