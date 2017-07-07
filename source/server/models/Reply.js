/**
 * Created by PC on 08-Jul-17.
 */
const mongoose = require('mongoose')

let replySchema = mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content: {type: mongoose.Schema.Types.String, required: true},
  comment: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
  upVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  downVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  upVotesCount: { type: mongoose.Schema.Types.Number, default: 0 },
  downVotesCount: { type: mongoose.Schema.Types.Number, default: 0 }
})
const Reply = mongoose.model('Reply', replySchema)
module.exports = Reply
