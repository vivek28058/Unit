Feature: As a user, I'd like a simple API so that I can do subtraction.

Scenario Outline: subtract
    Given an int <a> and an int <b> to subtract
    When I pass int <a> and int <b> to the subtract API
    Then the difference returned should be <c>

    Examples:
    |a|b|c|
    |5|2|3|
    |2|5|-3|