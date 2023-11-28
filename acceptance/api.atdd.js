import 'babel-polyfill'
import { Builder, By } from 'selenium-webdriver'
import { expect } from 'chai'
let driver
const int1 = 10
const int2 = 5
const {exec} = require("child_process")

describe('Calc API', () => {
    before(async()=>{
    exec("npm start")
  })
  after(async()=>{
    process.exit()
  })
  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build()
  })
  afterEach(async () => {
    driver.quit()
  })
  describe('#add', () => {
    beforeEach(async () => {
      await driver.get(`http://localhost:1337/add?int1=${int1}&int2=${int2}`)
    })
    it('should add two arguments', async () => {
      const h1 = await driver.findElement(By.css('h1'))
      const value = await h1.getAttribute('innerText')
      expect(value).to.equal(`${int1} + ${int2} = ${int1 + int2}`)
    })
  })

  describe('#subtract', () => {
    beforeEach(async () => {
      await driver.get(`http://localhost:1337/subtract?int1=${int1}&int2=${int2}`)
    })
    it('should add two arguments', async () => {
      const h1 = await driver.findElement(By.css('h1'))
      const value = await h1.getAttribute('innerText')
      expect(value).to.equal(`${int1} - ${int2} = ${int1 - int2}`)
    })
  })

  describe('#multiply', () => {
    beforeEach(async () => {
      await driver.get(`http://localhost:1337/multiply?int1=${int1}&int2=${int2}`)
    })
    it('should add two arguments', async () => {
      const h1 = await driver.findElement(By.css('h1'))
      const value = await h1.getAttribute('innerText')
      expect(value).to.equal(`${int1} * ${int2} = ${int1 * int2}`)
    })
  })

  describe('#divide', () => {
    beforeEach(async () => {
      await driver.get(`http://localhost:1337/divide?int1=${int1}&int2=${int2}`)
    })
    it('should add two arguments', async () => {
      const h1 = await driver.findElement(By.css('h1'))
      const value = await h1.getAttribute('innerText')
      expect(value).to.equal(`${int1} / ${int2} = ${int1 / int2}`)
    })
  })
})
