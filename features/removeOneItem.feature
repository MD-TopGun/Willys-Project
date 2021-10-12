Feature: Remove an item in the shopping cart
  In order to regret buying an item in the shopping cart,
  the user wants the ability to remove that item.


  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Remove an item
    Given I have three items in my shopping cart
    And I write 10 in the input field of the product
    When I regret the first one
    And I remove the product by cleare in the input field
    Then the item should not be in the cart any more
