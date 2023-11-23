Feature: As a user, I'd like a simple API so that I can do addition.

Scenario Outline: add
    Given an int <a> and an int <b> to add
    When I pass int <a> and int <b> to the add API
    Then the sum returned should be <c>

    Examples:
    |a|b|c|
    |5|2|7|
    |-5|2|-3|