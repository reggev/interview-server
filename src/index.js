const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const STEPS = require('./data')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(logger('short'))

app.get('/', (req, res) => {
  res.json(STEPS)
})

app.listen(PORT, () => {
  console.info(`🌵 listening on port ${PORT}\n\tpress ctrl+c to stop...`)
})
