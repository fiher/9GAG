const Comment = require('../models/Comment')
const Meme = require('../models/Meme')

module.exports = {
  getMemeComments: {
    get: (req, res) => {
      let memeId = req.params.memeId

      Comment.find({meme: memeId})
        .sort({createdOn: -1})
        .populate('author', 'replies')
        .then(comments => {
          res.status(200).send(comments)
        })
    },
    post: (req, res) => {
      let userId = req.body.author
      let memeId = req.params.memeId
      let content = req.body.content
      if (content.length < 1) {
        return res.status(401).send({ message: 'Content cannot be empty' })
      } else {
        let commentData = {
          author: userId,
          meme: memeId,
          content: req.body.content,
          replies: [],
          upVotes: [],
          downVotes: []
        }
        Comment.create(commentData).then(comment => {
          Meme.findById(memeId).then(meme => {
            meme.comments.push(comment._id)
          })
          res.status(200).send({comment})
        })
      }
    }
  }
}
