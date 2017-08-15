const mongoose = require('mongoose');
const Schema = mongoose.Schema

var articlesSchema = new Schema({
  name: String,
  content: String,
  category: String,
  author: {
    type: String,
    ref: 'Users'
  }
});

var Article = mongoose.model('Article', articlesSchema);

module.exports = Article;
