Feature: Combined List View
@ListView
  Scenario: Able to view correct data in list view
    Given User is on landing page
    When User clicks balance button
    When User clicks expense button
    When User adds an expense of 300
    Then User choose a category of Clothes
    Then User should view the balance is reduced with 300
    Then The sum total and view of records should be correct
