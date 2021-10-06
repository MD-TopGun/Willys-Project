Feature: Selecting a product category
  As a customer
  I want to be able to go to different categories of goods
  so that I can see which goods are included in a category (e.g. Bird, Tofu, etc.).

  Scenario: Categories and subcategories
    Given In the menu section of "https://www.willys.se"
    And I have selected the accept button
    When I select a category
    Then I should see items within that category



