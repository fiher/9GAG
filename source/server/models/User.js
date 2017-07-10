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
  firstName: {
    type: mongoose.Schema.Types.String,
    required: requiredMsg('First name')
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    required: requiredMsg('Last name')
  },
  age: {
    type: mongoose.Schema.Types.Number,
    min: [0, 'Age must be between 0 and 120'],
    max: [120, 'Age must be between 0 and 120']
  },
  gender: {
    type: mongoose.Schema.Types.String,
    enum: {
      values: ['Male', 'Female', 'Other'],
      message: 'Gender should be either "Male", "Female" or "Other"'
    }
  },
  memes: {type: mongoose.Schema.Types.ObjectId, ref: 'Meme'},
  comments: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
  upVotedMemes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Meme'}],
  downVotedMemes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Meme'}],
  roles: [{type: mongoose.Schema.Types.String, required: true}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
