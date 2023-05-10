
@navigation
Feature: Navigation

  As a user, 
  I want to be able to navigate the Luma website 
  easily and find the products I'm looking for quickly, 
  so that I can make a purchase without any hassle.

Scenario: Navigate to sub-pages for each menu item (happy path)

  Given the user is on the home page of the Luma website
  When they click on the "What's New" menu item
  Then they should see the "What's New" page
  When they click on the "Men" menu item
  Then they should see the "Men" page
  When they click on the "Women" menu item
  Then they should see the "Women" page
  When they click on the "Gear" menu item
  Then they should see the "Gear" page
  When they click on the "Training" menu item
  Then they should see the "Training" page
  When they click on the "Sale" menu item
  Then they should see the "Sale" page
    