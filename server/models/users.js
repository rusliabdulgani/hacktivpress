const mongoose = require('mongoose');
const Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  article_list: [{
    type: Schema.ObjectId,
    ref: 'Article'
  }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
