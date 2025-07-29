Feature: User Authentication tests

  Background:
    Given User navigation to the application
    And User clicks on the login link

@login
  Scenario: Login should be successful
    When User enter the username as "ortoni"
    And User enter the password as "pass1234"
    And User clicks on the login button
    Then Login should be successful
    