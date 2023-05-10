@add-to-cart-and-checkout
Feature: Add to cart and checkout

As a user, 
  I want to be able to add products to my cart
  and checkout quickly and easily, so that I can 
  complete my purchase without any delays.

Scenario: Test adding products to the cart and verify that the correct products and quantities are added (happy path).

  Given the user is on the home page of the Luma website
  When they click on the "Gear" menu
  And they click on the "Watches" menu
  And they click on the "Didi Sport Watch" product
  And they add a product to the cart
  And they  navigate to the cart
  And they proceed to checkout
  Then they should see the product in the basket case
