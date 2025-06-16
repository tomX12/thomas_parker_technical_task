Feature: Accessibility tests

  Scenario: Skip to content header is visible when the tab button is used
    Given the user hits the "tab" key
    Then the skip to content header should be visible