/**
 * Created by PC on 08-Jul-17.
 */
const mongoose = require('mongoose')

let commentSchema = mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content: {type: mongoose.Schema.Types.String, required: true},
  post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  upVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  downVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  upVotesCount: { type: mongoose.Schema.Types.Number, default: 0 },
  downVotesCount: { type: mongoose.Schema.Types.Number, default: 0 }
})
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
