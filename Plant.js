const mongoose = require("mongoose")

const PlantSchema = new mongoose.Schema({

  name: String,
  scientific_name: String,
  type: String,
  desc: String,
  usage: String,
  benefits: String,
  img: String,

})

module.exports = mongoose.model(
  "Plant",
  PlantSchema
)