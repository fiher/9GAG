const userController = require('./user')
const memeController = require('./meme')
const commentController = require('./comment')
const replyController = require('./reply')
const categoryController = require('./comment')

module.exports = {
  user: userController,
  meme: memeController,
  comment: commentController,
  reply: replyController,
  category: categoryController
}
