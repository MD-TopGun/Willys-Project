Feature: Selecting a product category
  As a customer
  I want to be able to go to different categories of goods
  so that I can see which goods are included in a category (e.g. Bird, Tofu, etc.).

  Scenario Outline: Scenario Outline name: Categories and subcategories
    Given In the menu section of "https://www.willys.se"
    And I have selected the accept button
    When I select meat category
    Then I should see items within that category


    And I can see a list of <subcategory> thereafter
    #And I should not see vegetable within meat category



    Examples: product sub categories
      | subcategory                              |
      | "a[href*= 'kott-chark-och-fagel/fagel']" |
#      | "a[href*='kott-chark-och-fagel/kott']"            |
#| "a[href*='kott-chark-och-fagel/korv']"            |
#| "a[href*='kott-chark-och-fagel/chark']"           |
#| "a[href*='kott-chark-och-fagel/palagg']"          |
#| "a[href*='kott-chark-och-fagel/delikatesschark']" |

