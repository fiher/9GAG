const Reply = require('../models/Reply')

module.exports = {
  getCommentReplies: {
    get: (req, res) => {
      let commentId = req.params.commentId

      Reply.find({meme: commentId})
        .sort({createdOn: -1})
        .populate('author', 'replies')
        .then(replies => {
          res.status(200).send(replies)
        })
    },
    post: (req, res) => {
      let userId = req.user._id
      let commentId = req.params.commentId
      let commentData = {
        author: userId,
        comment: commentId,
        content: req.body.content,
        replies: [],
        upVotes: [],
        downVotes: []
      }

      Reply.create(commentData).then(replies => {
        res.status(200).send({replies})
      })
    }
  }
}
