Feature: End to end tests

  Background:
    Given the employee starts a new calculation

  Scenario: Regular nine to five work pattern is entitled to 28 days holiday
    Given the employee works "regular" hours
    And their holiday entitlement is based on "days worked per week"
    And is for "a full year"
    And they work 5 day per week
    When they submit their details for calculation
    Then they are entitled to 28 days of holiday