Feature: Expense
@Expense
  Scenario: Able to add Expense
    Given User is on landing page
    When User clicks expense button
    When User adds an expense of 250
    Then User choose a category of Car
    Then User should view the balance is reduced with 250
