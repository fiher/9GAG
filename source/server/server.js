const env = require('./config/environment')
const expressConfig = require('./config/express')

const app = require('express')()

module.exports = () => {
  // Setup MongoDB connection
  require('./config/database')(env)

  // Initialize passport
  require('./config/passport')()

  // Import server-routes.
  require('./config/server-routes')(app)
}
