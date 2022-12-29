const customermodel = require('../modules/cutsomermodel')



const customerdata = async function(req, res){
    
    let data = await customermodel.create(req.body)
    res.send({msg:data})
}
const activecustomer = async function(req, res){
    let activecust = await customermodel.find({status: "ACTIVE"})
    return res.send({msg: activecust})
}

const deletecustomer = async function(req, res){
    let getid = req.body.id
    let urlid = req.params.userid
    if(getid!=urlid){
        return res.send({msg:"bosdike kiski ID delete krra"})
    }
    let removeId = await customermodel.findOneAndUpdate({_id: getid},{isDeleted: true},{new:true})
   return res.send({msg:removeId})
}

module.exports.activecustomer = activecustomer
module.exports.customerdata = customerdata
module.exports.deletecustomer = deletecustomer