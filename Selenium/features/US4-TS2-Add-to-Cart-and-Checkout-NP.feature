@add-to-cart-and-checkout
Feature: Add to cart and checkout

As a user, 
  I want to be able to add products to my cart
  and checkout quickly and easily, so that I can 
  complete my purchase without any delays.

Scenario: Test subtract all products from the cart and verify that couldn’t checkout with empty basket (negative path).

Given the user is on the home page of the Luma website
When they click on the "Gear" menu
And they click on the "Watches" menu
And they click on the "Didi Sport Watch" product
And they add a product to the cart
And they click on the "View cart" button
And they click on the "Remove item" link
Then they should not be able to checkout with an empty basket