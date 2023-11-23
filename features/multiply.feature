Feature: As a user, I'd like a simple API so that I can do multiplication.

Scenario Outline: multiply
    Given an int <a> and an int <b> to multiply
    When I pass int <a> and int <b> to the multiply API
    Then the product returned should be <c>

    Examples:
    |a|b|c|
    |5|2|10|
    |-5|2|-10|