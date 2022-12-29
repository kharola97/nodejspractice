const mongoose = require("mongoose")
const {v4 : uuidv4} = require('uuid')


const customerSchema = new mongoose.Schema({
    fname: String,
    lname:String,
    mobileno:{
        type:String,
        minlength : 10,
        maxlength : 10
    },
    DOB: String,
    email: {
        type: String,
        match: /.+\@.+\..+/,
    },
    customerID:{
        type : String,
        default: uuidv4(),
    },
    address:String,
    status:{
        type:String,
        uppercase:true,
        enum: ['ACTIVE', 'INACTIVE']
    },
    isDeleted : {
        type: Boolean,
        default: "false"
    }
},{ timestamps: true })

module.exports = mongoose.model('customer', customerSchema)