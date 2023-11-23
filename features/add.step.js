import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import { add } from '../calc'

let result
Given('an int {int} and an int {int} to add', function (int, int2) {})

When('I pass int {int} and int {int} to the add API', function (int, int2) {
  result = add(int, int2)
})

Then('the sum returned should be {int}', function (int) {
  expect(result).to.equal(int)
})
