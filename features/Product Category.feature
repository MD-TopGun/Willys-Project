Feature: Selecting a product category
  As a customer
  In order to look out more for special category
  I want to be able to select a product category

  Scenario: Willys category for example kykling
    When I select a category
    Then I should see items within that category

  Scenario: Test
    When I select a category
    Then I should see items within that category