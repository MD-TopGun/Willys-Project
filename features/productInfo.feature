<<<<<<< HEAD:features/productInfoMaziar.feature
Feature: Get more information
  In order to interest customers
  User should be able to see more
  about a product by clicking on it

  Scenario: Get product information by "click"
    Given that I am on "https://willys.se"
    When I enter "fisk & skaldjur" In categories
    And I enter "Skaldjur & Havsdelikatesser"
    And I click on "Hummer Amerikansk/kokt Fryst"
    Then should get information about the product

  Scenario: Get product information by "Enter"
    Given that I am on "https://willys.se"
    When I enter "fisk & skaldjur" In categories
    And I enter "Skaldjur & Havsdelikatesser"
    And I click on "Hummer Amerikansk/kokt Fryst"
    Then should get information about the product
=======
Feature: Get more information
  In order to interest customers
  User should be able to see more
  about a product by clicking on it

  Scenario: Get product information by "click"
    Given that I am on "https://willys.se"
    When I enter "fisk & skaldjur" In categories
    And I enter "Skaldjur & Havsdelikatesser"
    And I click on "Hummer Amerikansk/kokt Fryst"
    Then should get information about the product

  Scenario: Get product information by "Enter"
    Given that I am on "https://willys.se"
    When I enter "fisk & skaldjur" In categories
    And I enter "Skaldjur & Havsdelikatesser"
    And I click on "Hummer Amerikansk/kokt Fryst"
    Then should get information about the product


>>>>>>> 445fddd28a72c4398b3b982737a06216125a9d87:features/productInfo.feature
