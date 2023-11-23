import { assert } from 'chai'
import { add, subtract, multiply, divide } from './calc'

const int1 = 10
const int2 = 5

describe('calc.js', () => {
  describe('#add', () => {
    it('should add two arguments together', done => {
      assert(add(int1, int2) === int1 + int2)
      done()
    })
  })
  describe('#subtract', () => {
    it('should subtract arg 2 from arg 1', done => {
      assert(subtract(int1, int2) === int1 - int2)
      done()
    })
  })
  describe('#multiply', () => {
    it('should multiply two arguments', done => {
      assert(multiply(int1, int2) === int1 * int2)
      done()
    })
  })
  describe('#divide', () => {
    it('should divide arg 1 by arg 2', done => {
      assert(divide(int1, int2) === int1 / int2)
      done()
    })
  })
})
