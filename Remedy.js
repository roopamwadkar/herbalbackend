const mongoose = require("mongoose")

const RemedySchema = new mongoose.Schema({

  name: String,
  type: String,
  ingredients: String,
  steps: String,
  benefit: String

})

module.exports = mongoose.model(
  "Remedy",
  RemedySchema
)