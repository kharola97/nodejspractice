//const { findByIdAndUpdate, findOneAndUpdate } = require("../modules/cardshema")
const cardmodel = require("../modules/cardshema")

const carddata = async function(req, res){
    
    let data = await cardmodel.create(req.body)
    let userid = data._id
    let cno = await cardmodel.find().count()
    let updated = await cardmodel.findOneAndUpdate({_id:userid},{cardNumber:"C00" + cno},{new:true})
    res.send({msg:updated})
}
 const getcards = async function(req,res){
    let data = await cardmodel.find().populate("customerid")
    return res.send({msg:data})
 }
 
 module.exports.getcards = getcards
module.exports.carddata = carddata
