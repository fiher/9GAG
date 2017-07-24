const Meme = require('../models/Meme')

module.exports = {
  add: {
    post: (req, res) => {
      let memeData = {
        title: req.body.title,
        author: req.body.author,
        memeUrl: req.body.memeUrl,
        category: req.body.category,
        upVotes: [],
        downVotes: []
      }
      Meme.create(memeData).then(meme => {
        res.status(200).send({meme})
      })
    }
  },
  getAllMemes: {
    get: (req, res) => {
      Meme.find({})
        .populate('comments', 'author')
        .sort({createdOn: -1})
        .then(memes => {
          console.log('these are my memes')
          console.log(memes)
          res.status(200).send(memes)
        }).catch((err) => {
          res.status(400).send(err)
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
  },
  getOneMeme: {
    get: (req, res) => {
      let memeID = res._memeID
      Meme.find({id: memeID})
        .populate('author', 'category', 'comments')
        .then(meme => {
          res.status(200).send(meme)
        })
    }
  }
}
