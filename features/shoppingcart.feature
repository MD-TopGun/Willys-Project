Feature: Viewing Shopping Cart
    As a user I want to review my items in my cart before buying so I will check my shopping cart

    Background:
        Given that we are on Willy's website
        And that we accepted the standard cookie policy
        And that we have been through the initial where to deliver popup


    Scenario: Add products to the shopping cart and view quantity in mini-cart
        Given that I am on the Fruit and Vegetable category page
        When I put a random number of each Fruit and Vegetable that has price per piece in the cart
        Then the mini\-cart should show the correct total quantity of products