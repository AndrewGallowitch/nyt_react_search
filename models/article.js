const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
