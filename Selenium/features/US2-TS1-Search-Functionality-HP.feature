@search-functionality
Feature: Search Functionality

As a user, 
  I want to be able to search for products on the Luma website
  and see accurate results, so that I can find the products
  I want without having to browse through multiple pages.

Scenario: Test the search functionality to ensure accurate search results (happy path)
    
  Given the user is on the home page of the Luma website
  When they enter product name in the search bar
  And they select the first search suggestion
  Then they should see accurate search results