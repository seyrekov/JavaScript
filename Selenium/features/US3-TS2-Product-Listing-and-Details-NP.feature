@product-listing-and-details
Feature: Product listing and details

As a user, 
  I want to be able to view accurate product details 
  such as prices, descriptions, and images, so that 
  I can make an informed decision when purchasing products.

Scenario: Test that users cannot view related products in Sale menu if in the product category there are not products with discount price

  Given the user is on the home page of the Luma website
  When they click on the "Men" menu
  And they click on the "Bottoms" menu
  And they click on the "Directory" filter
  And they click on the "Pants" menu
  And they click the "Sale" filter
  Then they should not see any related products in Sale