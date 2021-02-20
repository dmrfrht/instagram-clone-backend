const model = require('./model')
const jwt = require('jsonwebtoken')
const userModel = require('../user/model')

module.exports = {
  newPost: (req, res) => {
    let user_id = jwt.decode(req.body.auth_token).id

    userModel.findById(user_id)
      .then(result => {
        if (!result) {
          res.send({success: false, msg: 'No user was found'})
          return
        }

        let newPost = new model({
          user_id,
          display_name: result.forename + ' ' + result.surname,
          image: req.body.image,
          desc: req.body.desc,
          timestamp: new Date().getTime()
        })

        newPost.save()
          .then(result => {
            res.send({success: true, result})
          })
          .catch(err => {
            if (err) res.send({success: false, error: err})
          })
      })
  },
  getPosts(req, res) {
    model.find()
      .then(result => {
        result = result.sort(function (a,b) {
          return b.timestamp - a.timestamp
        })
        res.send(result)
      })


  }
}
