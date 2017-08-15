const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()

module.exports = {
  signup: (req, res) => {
    let hashPwd =  bcrypt.hashSync(req.body.password, salt);
    User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.send(err)
    })
  }
}
