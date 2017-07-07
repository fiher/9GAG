/**
 * Created by PC on 08-Jul-17.
 */
const mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: true}
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category
