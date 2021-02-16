module.exports = {
  port: process.env.PORT || 3000,
  mongo_uri: 'mongodb+srv://rootUser:0246813579@cluster0.ym25n.mongodb.net/instaclone?retryWrites=true&w=majority'  || 'mongodb://127.0.0.1:27017/instaclone',
  secret: process.env.SECRET || 'superSecretKeyGuys'
}

// process.env.MONGO_URI
