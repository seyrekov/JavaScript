@search-functionality
Feature: Search functionality

As a user, 
  I want to be able to search for products on the Luma website 
  and see accurate results, so that I can find the products
  I want without having to browse through multiple pages.

Scenario: Prevent navigation to non-existing product (negative path)

  Given the user is on the Luma website
  When the user enters a non-existing product name in the search bar
  And clicks on the search button
  Then they should not be navigated to any product page
  And they should be redirected to a separate page with an error 
  message indicating that no matching products were found

   