const Meme = require('../models/Meme')
const createFileLoader = require('../utilities/imgur-api')
module.exports = {
  add: {
    post: (req, res) => {
      let userId = req.user._id
      let image = res.image
      let response = createFileLoader(image)
      if (response.sucess) {
        let memeData = {
          title: res.title,
          author: userId,
          memeUrl: response.data.link,
          category: res.category,
          upVotes: [],
          downVotes: []
        }
        Meme.create(memeData).then(meme => {
          res.status(200).send({meme})
        })
      }
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
