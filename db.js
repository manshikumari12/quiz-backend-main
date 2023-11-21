const mongoose =require("mongoose")
require("dotenv").config()
const connection= mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.rtn8f7n.mongodb.net/quiz?retryWrites=true&w=majority")

module.exports={connection}