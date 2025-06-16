Feature: Negative tests to check error handling

  Scenario: Error displays when the user tries to continue without selecting a radio btn
    Given the user is on the "Does the employee work irregular hours or for part of the year?" page
    When the user clicks continue
    Then the error message "Please answer this question" is visible

  Scenario: Error displays when user tries to enter more than 7 days worked per week
    Given the user is on the "Number of days worked per week?" page
    And  they work "8" day per week
    When the user clicks continue
    Then the error message "There are only 7 days in a week. Please check and enter a correct value." is visible