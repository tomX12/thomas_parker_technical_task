Feature: Navigation tests

  Scenario: The user can start a new form
    Given the user is on the "Number of days worked per week?" page
    When the user clicks the "Start again" link
    Then the user is returned to the homepage

  Scenario: User can change an answer
    Given the user has answered a question
    When the user changes their answer for the answered question
    Then the answer should be updated