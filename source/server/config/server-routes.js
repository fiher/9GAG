const controllers = require('../controllers')

module.exports = (app) => {
  // User routes
  app.post('/user/register', controllers.user.register.post)
  app.post('/user/login', controllers.user.login.post)
  app.post('/user/logout', controllers.user.logout)
  app.get('/api/user/:userId', controllers.user.profile.get)

  // Memes routes
  app.get('/api/memes/all', controllers.meme.getAllMemes.get)
  app.post('/api/memes/add', controllers.meme.add.post)
  app.get('/api/memes/:memeId', controllers.meme.getOneMeme.get)
  app.post('/api/memes/:memeId/comments',
    controllers.comment.getMemeComments.post)

  // Categories routs
  app.get('/api/categories/all', controllers.category.getAllCategories.get)
  app.post('/api/admin/category/add', controllers.category.addCategory.post)
  app.get('/api/categories/:category', controllers.category.searchByCategory.get)

  // Meme likes
  // app.post('/api/memes/:memeId/like', controllers.meme.like.post);
}
