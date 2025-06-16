Feature: End to end tests

  Background:
    Given the employee starts a new calculation

  Scenario: Regular nine to five work pattern for a full year is entitled to 28 days holiday
    Given the employee selects "No" for working irregular hours
    And their holiday entitlement is based on "days worked per week"
    And is "for a full leave year"
    And they work "5" day per week
    When they submit their details for calculation
    Then they are entitled to "28 days" of holiday

  Scenario: Irregular shift worker for 6 months working 8 hours per shift in a 10 shift cycle
    Given the employee selects "Yes" for working irregular hours
    And the leave year starts on the "22/05/2022"
    And their holiday entitlement is based on "shifts"
    And is "for someone starting and leaving part way through a leave year"
    When the employment start date was the "22/05/2022"
    And the employment end date was the "22/12/2022"
    And they worked "8" hour shifts
    And "10" shifts are worked per shift pattern
    And "14" days in the shift pattern
    Then they are entitled to "16.50 shifts" of holiday


