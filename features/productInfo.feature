Feature: Get more information
  In order to interest customers
  User should be able to see more
  about a product by clicking on it


  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy

  Scenario Outline:  Open a product info
    Given that I am on <subCategory>
    And I click on a <product>
    Then  There is information on the table


    Examples: product sub categories
      | subCategory                                                              | product                                |
      | "https://www.willys.se/sortiment/kott-chark-och-fagel/fagel/farsk-fagel" | "a[href*= 'Majskyckling-Hel-Sverige']" |
      | "https://www.willys.se/sortiment/frukt-och-gront/frukt"                  | "a[href*='apple-Royal-Gala-Klass-1']"  |
      | "https://www.willys.se/sortiment/blommor-och-tradgard"                   | "a[href*='Blom-Jord']"                 |
      | "https://www.willys.se/sortiment/lotter"                                 | "a[href*='Triss-Lott']"                |

