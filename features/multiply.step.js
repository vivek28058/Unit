import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import { multiply } from '../calc'

let result
Given('an int {int} and an int {int} to multiply', function (int, int2) {})

When('I pass int {int} and int {int} to the multiply API', function (int, int2) {
  result = multiply(int, int2)
})

Then('the product returned should be {int}', function (int) {
  expect(result).to.equal(int)
})
