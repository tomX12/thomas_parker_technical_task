Feature: End to end tests

  Background:
    Given the employee starts a new calculation

  Scenario: Regular nine to five work pattern for a full year is entitled to 28 days holiday
    Given the employee selects "No" for working irregular hours
    And their holiday entitlement is based on "days worked per week"
    And is "for a full leave year"
    And they work "5" day per week
    When they submit their details for calculation
    Then they are entitled to "28" days of holiday