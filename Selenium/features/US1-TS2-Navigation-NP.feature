@navigation
Feature: Navigation

As a user, 
  I want to be able to navigate the Luma website 
  easily and find the products I'm looking for quickly, 
  so that I can make a purchase without any hassle.

Scenario: Verify users cannot place a product in the basket without entering size and color (Negative path)

  Given the user is on the home page of the Luma website
  When they select the "Tops" category
  And they select the "Breathe-Easy Tank" product
  And they click the "Add to Cart" button
  Then an error message is displayed indicating that the size and color must be selected