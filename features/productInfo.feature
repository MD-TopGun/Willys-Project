Feature: Get more information
  In order to interest customers
  User should be able to see more
  about a product by clicking on it

  Scenario: Get product information by "click"
    Given that I am on "https://www.willys.se/sortiment/fryst/fisk-och-skaldjur/kraftor-och-hummer"
    # When I click on MENY button
    When I click on fisk & skaldjur in categories
    # And I click "Skaldjur & Havsdelikatesser"
    # And I click on "Hummer Amerikansk/kokt Fryst"


    Then should get information about the product


