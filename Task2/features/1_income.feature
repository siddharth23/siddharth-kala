Feature: Income
@Income
  Scenario: Able to add income
    Given User is on landing page
    When User clicks income button
    When User adds an income of 1000
    Then User choose a category of Salary
    Then User should view the balance is added with 1000
