Feature: Selecting a product category
  As a customer
  In order to look out more for special category
  I want to be able to select a product category

  Scenario: Categories and subcategories
    Given In the menu section
    When I select plus sign of a category
    Then I should see items within that category


  Scenario: Willys category for example kykling
    Given In the category section
    When I click on a category
    Then I should navigate to the selected category
