const mongoose = require('mongoose')
const requiredMsg = require('../utilities/requiredPropsMsg')

let userSchema = mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: requiredMsg('Username'),
    unique: true
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: requiredMsg('Password')
  },
  salt: {type: mongoose.Schema.Types.String, required: true},
  profilePicture: {type: mongoose.Schema.Types.String},
  firstName: { type: mongoose.Schema.Types.String },
  lastName: { type: mongoose.Schema.Types.String },
  age: { type: mongoose.Schema.Types.Number },
  gender: { type: mongoose.Schema.Types.String },
  memes: {type: mongoose.Schema.Types.ObjectId, ref: 'Meme'},
  comments: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
  upVotedMemes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Meme'}],
  downVotedMemes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Meme'}],
  roles: [{type: mongoose.Schema.Types.String}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
