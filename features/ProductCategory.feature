Feature: Selecting a product category
  As a customer
  I want to be able to go to different categories of goods
  so that I can see which goods are included in a category (e.g. Bird, Tofu, etc.).

  Scenario: Categories and subcategories
    Given In the menu section
    When I select plus sign of a category
    Then I should see items within that category


  Scenario: Willys category for example kykling
    Given In the category section
    When I click on a category
    Then I should navigate to the selected category
