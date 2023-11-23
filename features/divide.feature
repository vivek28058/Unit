Feature: As a user, I'd like a simple API so that I can do division.

Scenario Outline: divide
    Given an int <a> and an int <b> to divide
    When I pass int <a> and int <b> to the divide API
    Then the quotient returned should be <c>

    Examples:
    |a|b|c|
    |10|2|5|
    |-10|2|-5|