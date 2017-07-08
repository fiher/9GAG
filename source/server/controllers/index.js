const userController = require('./user')
const postController = require('./post')
const commentController = require('./comment')
const replyController = require('./reply')
const categoryController = require('./comment')

module.exports = {
  user: userController,
  post: postController,
  comment: commentController,
  reply: replyController,
  category: categoryController
}
