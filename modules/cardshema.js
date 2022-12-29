const mongoose = require("mongoose")


const objectid = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema({
    cardNumber :{
        type: String,
       
    },
    cardType:{
        type: String,
        uppercase: true,
        enum: ["REGULAR", "SPECIAL"]
    },
    customerName: String,
    status:{
        type:String,
        uppercase:true,
        default:"ACTIVE",
        enum: ["ACTIVE", "INACTIVE"]
    },
    vision:String,
    customerid : {
        type: objectid,
        ref : "customer"
    }
},{ timestamps: true })


module.exports = mongoose.model('card', cardSchema)