Feature: Empty the shopping cart
  In order to regret the shopping cart items
  the user wants to be able to delete the entire shopping cart
  Scenario: empty shopping cart
    Given In "https://www.willys.se"
    And In shopping cart
    When I click on "Empty shopping cart" button
    Then It should delete all items in the shopping cart
  Scenario: empty shopping cart
    Given In "https://www.willys.se"
    And In shopping cart
    When I write "0" in all the items
    Then All the items should be removed
