const Meme = require('../models/Meme')

module.exports = {
  add: {
    post: (req, res) => {

    }
  },
  getAllMemes: {
    get: (req, res) => {
      Meme.find({})
        .sort({createdOn: -1})
        .populate('author', 'category', 'comments')
        .then(memes => {
          res.status(200).send(memes)
        })
    }
  },
  getUserPosts: {
    get: (req, res) => {
      // Display them in user profile page
    }
  },
  search: {
    get: (req, res) => {

    }
  }
}
