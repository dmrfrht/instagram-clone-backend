const express = require('express')
const app = express()

const config = require('./config/index')
const db = require('./config/database')

const userRouter = require('./router/user')

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors)

app.use('/user', userRouter)

app.listen(config.port, () => {
  console.log(`Server has started on http://localhost:${config.port}`)
})
