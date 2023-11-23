import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import { divide } from '../calc'

let result
Given('an int {int} and an int {int} to divide', function (int, int2) {})

When('I pass int {int} and int {int} to the divide API', function (int, int2) {
  result = divide(int, int2)
})

Then('the quotient returned should be {int}', function (int) {
  expect(result).to.equal(int)
})
