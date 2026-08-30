const mongoose = require("mongoose")
const holdingSchema = require("../schemas/holdingSchema")

const holdingModel =  mongoose.model("holding", holdingSchema)

module.exports = holdingModel;