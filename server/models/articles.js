const mongoose = require('mongoose');
const Schema = mongoose.Schema

var articlesSchema = new Schema({
  name: String,
  content: String,
  category: String,
  author: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
