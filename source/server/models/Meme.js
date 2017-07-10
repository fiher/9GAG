const mongoose = require('mongoose')
const requiredMsg = require('../utilities/requiredPropsMsg')

let memeSchema = mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: requiredMsg('Title')
  },
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  createdOn: {
    type: mongoose.Schema.Types.Date,
    default: new Date(Date.now()).toISOString()
  },
  memeUrl: {type: mongoose.Schema.Types.String, required: requiredMsg('Url')},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  upVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  downVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  upVotesCount: { type: mongoose.Schema.Types.Number, default: 0 },
  downVotesCount: { type: mongoose.Schema.Types.Number, default: 0 }
})

const Post = mongoose.model('Meme', memeSchema)

module.exports = Post
