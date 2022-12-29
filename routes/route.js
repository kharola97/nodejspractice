const express = require("express")
const router = express.Router()
const {Router} = require("express")
module.exports = router
const customer = require("../files/controller/customercollection")
const card = require("../files/controller/cardcollection")


router.get('/hello', async function(req, res){
    res.send("hello my cool API")
})

router.post('/customer', customer.customerdata )
router.get("/getdata", customer.activecustomer )
router.post("/delete/:userid", customer.deletecustomer)
router.post('/card', card.carddata )
router.get("/getcard", card.getcards)

