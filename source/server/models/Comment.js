const mongoose = require('mongoose')

let commentSchema = mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content: {type: mongoose.Schema.Types.String, required: true},
  createdOn: {
    type: mongoose.Schema.Types.Date,
    default: new Date(Date.now()).toISOString()
  },
  meme: {type: mongoose.Schema.Types.ObjectId, ref: 'Meme'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  upVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  downVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  upVotesCount: { type: mongoose.Schema.Types.Number, default: 0 },
  downVotesCount: { type: mongoose.Schema.Types.Number, default: 0 }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
