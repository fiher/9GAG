const Category = require('../models/Category')

module.exports = {
  getAllCategories: {
    get: (req, res) => {
      Category.find()
        .sort({createdOn: -1})
        .then(categories => {
          res.status(200).send(categories)
        })
    }
  },
  addCategory: {
    post: (req, res) => {

    }
  },
  searchByCategory: {
    get: (req, res) => {

    }
  }
}
