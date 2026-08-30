require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 8080
const uri = process.env.MONGO_URL


const app = express();
mongoose.connect(uri)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Connection error:", err))

app.listen(PORT,()=>{
    console.log(`the server is listening in port ${PORT}`)
})

