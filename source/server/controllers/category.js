const Category = require('../models/Category')
const Meme = require('../models/Meme')
module.exports = {
  getAllCategories: {
    get: (req, res) => {
      console.log('made it')
      Category.find({})
        .sort({createdOn: -1})
        .then(categories => {
          res.status(200).send(categories)
        })
    }
  },
  addCategory: {
    post: (req, res) => {
      let categoryName = req.body.name
      let categoryData = {
        name: categoryName
      }
      Category.create(categoryData).then(category => {
        res.status(200).send({category})
      })
    }
  },
  searchByCategory: {
    get: (req, res) => {
      console.log(req.params)
      Meme.find({category: req.params.category})
        .sort({createdOn: -1})
        .then(memes => {
          console.log('woah')
          res.status(200).send(memes)
        })
    }
  }
}
