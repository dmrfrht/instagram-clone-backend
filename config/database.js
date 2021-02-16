const mongoose = require('mongoose')
const config = require('./index')

const db = mongoose.connect(config.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('An error has occurred', err))

module.exports = db
