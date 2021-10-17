Feature: Change the number of an item
    In order to buy more of an item in the
    shopping cart, the user wants the ability
    to add or remove the number of that item.

    Background:
        Given that we are on Willy's website
        And that we accepted the standard cookie policy
        And that we have been through the initial where to deliver popup

    Scenario Outline: Increase the quantity of an item by click on plus button
        Given that I am in category Fryst fågel
        When I choose Chicken Tom Yum Bits to buy
        And I click <numberToIncreaseProduct> times on plus button
        Then the quantity of the item should be <numberToIncreaseProduct>
        Examples:
            | numberToIncreaseProduct |
            | 1                       |
            | 3                       |
            | 8                       |
    Scenario Outline: Decrease the quantity of an item by click on minus button
        Given that I am in category Fryst fågel
        When I choose Chicken Tom Yum Bits to buy
        And  I write <numberOfProduct> in the input field of the product
        And I click <numberToDecreaseProduct> times on minus button
        Then the quantity of the item should be <difference>
        Examples:
            | numberOfProduct | numberToDecreaseProduct | difference |
            | 2               | 2                       | 0          |
            | 3               | 2                       | 1          |
            | 8               | 5                       | 3          |

    Scenario Outline: Giv the quantity of an item by write and press enter
        Given that I am in category Fryst fågel
        And I choose Chicken Tom Yum Bits to buy
        When  I write <numberOfProduct> in the input field of the product
        Then the quantity of the item should be <numberOfProduct>

        Examples:
            | numberOfProduct |
            | 1               |
            | 5               |
            | 10              |