Feature: Get more information
  In order to interest customers
  User should be able to see more
  about a product by clicking on it

  Scenario: Get product information by "click"
    Given In a specific category page
    When I click on one product
    Then should get information about the product

  Scenario: Get product information by "Enter"
    Given In a specific category page
    When I push enter key on one product
    Then should get information about the product
