Feature: User Login

  As a registered user
  I want to log in to my account
  So that I can access my personalized settings and manage my account 

    Scenario: Successful login with valid credentials

    Given I am on the login page
    When I enter my valid email and password
    And I click on the Sign In button
    Then I should be redirected to My Account page with my email "jd3@email.com" in the contact information

  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |
