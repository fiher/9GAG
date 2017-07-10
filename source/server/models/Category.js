const mongoose = require('mongoose')
const requiredMsg = require('../utilities/requiredPropsMsg')

let categorySchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: requiredMsg('Category name')
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
