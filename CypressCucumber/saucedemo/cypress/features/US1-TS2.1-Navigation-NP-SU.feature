Feature: Navigation - Negative Path - Standard User

Scenario: User encounters negative scenarios as a standard user
  Given the user is on the Sauce Demo website
  When the user enters the username "standard_user"
  And the user enters the password "secret_sauce"
  And the user clicks the login button
  Then the user should be redirected to the inventory page
  And the inventory container should be visible
  And the user adds an item to the cart
  Then the button label should change to "Remove"
  And the user opens the burger menu
  Then the button label should change back to "Add to cart"
  And the user resets the sidebar
  Then the button label should change back to "Add to cart"
  And the user removes the item from the cart
  Then the button label should change back to "Add to cart"
