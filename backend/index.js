require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = process.env.PORT || 8080
const uri = process.env.MONGO_URL

const holdingModel = require("./model/holdingModel")
const orderModel = require("./model/orderModel")
const positionModel = require("./model/positionModel")

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Connection error:", err))


app.get("/getHoldings", async(req,res)=>{
  let allHoldings = await holdingModel.find({});
  res.json(allHoldings);
})

app.get("/getPositions", async(req,res)=>{
  let allPositions = await positionModel.find({});
  res.json(allPositions);
})

app.post("/newOrder", async (req,res)=>{
 let newOrder = new orderModel({
   name : req.body.name,
    qty : req.body.qty,
    price : req.body.price,
    mode : req.body.mode,
 });
 await newOrder.save();

 if(req.body.mode == "BUY"){ 
  let existingHolding = await holdingModel.findOne({name : req.body.name});
  if (existingHolding) {
        // Stock already in holdings — update qty and average price
        const totalQty = existingHolding.qty + Number(req.body.qty);
        const totalCost =
          existingHolding.avg * existingHolding.qty +
          req.body.price * req.body.qty;

        existingHolding.qty = totalQty;
        existingHolding.avg = totalCost / totalQty;

        await existingHolding.save();
      } else {
        // New stock — create a fresh holding
        let newHolding = new holdingModel({
          name: req.body.name,
          qty: req.body.qty,
          avg: req.body.price,
          price: req.body.price, // current market price, if you track it separately
          net: "0%",             // placeholder, depends on your schema
          day: "0%",             // placeholder, depends on your schema
        });

        await newHolding.save();
      }
 }
 res.send("order saved")
})
app.listen(PORT,()=>{
    console.log(`the server is listening in port ${PORT}`)
})

