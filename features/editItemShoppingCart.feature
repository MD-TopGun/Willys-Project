Feature: Change the number of an item
  In order to buy more or less of an item in the shopping cart
  the user wants the ability to change the number of that item
  Scenario: Increase the quantity of an item by 1
    Given In "https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "+" button once
    Then the quantity of  the item should be increased by 1
  Scenario: Increase the quantity of an item by 2.
    Given In "https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "+" button twice
    Then the quantity of  the item should be increased by 2
  Scenario: Reduce the quantity of an item by 1
    Given In "https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "-" button once
    Then the quantity of  the item should be reduced by 1
  Scenario: Reduce the quantity of an item by 2
    Given "In https://www.willys.se"
    And In shopping cart
    And In one of the items
    When I click on "-" button twice
    Then the quantity of  the item should be reduced by 2.
