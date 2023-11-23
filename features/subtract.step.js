import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import { subtract } from '../calc'

let result
Given('an int {int} and an int {int} to subtract', function (int, int2) {})

When('I pass int {int} and int {int} to the subtract API', function (int, int2) {
  result = subtract(int, int2)
})

Then('the difference returned should be {int}', function (int) {
  expect(result).to.equal(int)
})
