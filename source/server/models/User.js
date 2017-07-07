/**
 * Created by PC on 07-Jul-17.
 */
const mongoose = require('mongoose')
// TODO: ObjectID might be with lower D

let userSchema = mongoose.Schema({
  username: {type: mongoose.Schema.Types.String, required: true},
  profilePicture: {type: mongoose.Schema.Types.String, required: false},
  posts: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  comments: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
  upvotedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  downvotedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  salt: {type: mongoose.Schema.Types.String, required: true},
  hashedPassword: {type: mongoose.Schema.Types.String, required: true},
  roles: [{type: mongoose.Schema.Types.String, required: true}]
})
const User = mongoose.model('User', userSchema)
module.exports = User
