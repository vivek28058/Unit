import express from 'express'
import { add, subtract, multiply, divide } from './calc'

const app = express()

app
  .get('/add', (req, res) => {
    const { int1, int2 } = req.query
    res.end(`<h1>${int1} + ${int2} = ${add(parseInt(int1, 10), parseInt(int2, 10))}</h1>`)
  })
  .get('/subtract', (req, res) => {
    const { int1, int2 } = req.query
    res.end(`<h1>${int1} - ${int2} = ${subtract(parseInt(int1, 10), parseInt(int2, 10))}</h1>`)
  })
  .get('/multiply', (req, res) => {
    const { int1, int2 } = req.query
    res.end(`<h1>${int1} * ${int2} = ${multiply(parseInt(int1, 10), parseInt(int2, 10))}</h1>`)
  })
  .get('/divide', (req, res) => {
    const { int1, int2 } = req.query
    res.end(`<h1>${int1} / ${int2} = ${divide(parseInt(int1, 10), parseInt(int2, 10))}</h1>`)
  })
  .listen(1337)
