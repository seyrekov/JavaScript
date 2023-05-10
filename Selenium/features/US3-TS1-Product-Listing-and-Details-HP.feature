@product-listing-and-details
Feature: Product listing and details

As a user, 
  I want to be able to view accurate product details 
  such as prices, descriptions, and images, so that 
  I can make an informed decision when purchasing products.

Scenario: Test that users can view more details for available products (happy path)

  Given the user is on the home page of the Luma website
  When they click on the "Gear" menu
  And they click on the "Watches" menu
  And they click on the "Didi Sport Watch" product
  And they click on the "Details" tab
  Then they should be able to view information in "Details" tab