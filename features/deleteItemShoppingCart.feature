
Feature: Remove an item in the shopping cart
  In order to regret buying an item in the shopping cart,
  the user wants the ability to remove that item.

  Scenario: Remove an item with the quantity of 1.
    Given In "https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "-"  button
    Then the item should be removed.

  Scenario: Remove an item with the quantity of 2.
    Given In "https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "-" button 2 times
    Then the item should be removed.

  Scenario: Remove an item with the quantity of 3.
    Given In "https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "-" button 3 times
    Then the item should be removed.

