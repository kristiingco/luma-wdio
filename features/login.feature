Feature: User Login

  As a registered user
  I want to log in to my account
  So that I can access my personalized settings and manage my account 

  Scenario: Successful login with valid credentials
      Given I am on the login page
      When I enter my valid email and password
      And I click on the Sign In button
      Then I should be redirected to My Account page with my email "jd3@email.com" in the contact information

  Scenario: Successful login with valid credentials
      Given I am logged in
      When I click the Sign Out button 
      Then I should be logged out

  Scenario Outline: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter incorrect credentials such as incorrect email <email> or password <password>
    And I click on the Sign In button
    Then I should see an error message

    Examples:
      | email           | password             | 
      | jd100@email.com | Password123!         | 
      | jd3@email.com   | Password12345!       | 
      | jd99@email.com  | Password0987!        |
