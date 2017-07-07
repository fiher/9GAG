/**
 * Created by PC on 08-Jul-17.
 */
const mongoose = require('mongoose')

let postSchema = mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  comments: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
  upVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  downVotedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  upVotesCount: { type: mongoose.Schema.Types.Number, default: 0 },
  downVotesCount: { type: mongoose.Schema.Types.Number, default: 0 }
})
const Post = mongoose.model('Post', postSchema)
module.exports = Post
