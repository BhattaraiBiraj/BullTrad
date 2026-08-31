const  mongoose  = require("mongoose")
const orderSchema = require("../schemas/orderSchema")

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel