Feature: Browse Products

    As a visitor
    I want to view different types of fitness clothing
    So that I can see which products I can purchase

    Scenario Outline: Viewing products in a specific category
        Given I am on the homepage
        When I select the <category> category
        Then I should see a list of products 

      Examples:
      | category   | 
      | Women      | 
      | Men        | 
      | Gear       | 