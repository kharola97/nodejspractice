const ankit = require("./second");
const express = require('express')
const bodyparser = require('body-parser')
const route = require('./routes/route')
const {default : mongoose} = require('mongoose')
const app = express()
// mongoose.set("strictQuery",false)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://ankitdb:ankit321@cluster0.nz06g9j.mongodb.net/jaikisan",{UseNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))
app.use("/",route)
app.listen(process.env.PORT || 4000, function(){
    console.log("express app running on port" + (process.env.PORT || 4000))
})


// console.log('hif', ankit)
