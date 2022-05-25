const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Taxi = require('../models/taxiModel');


router.post('/book', async (req, res) => {

    const { id , userid ,name, email, address,date ,phone } = req.body;
    const bookTaxi = new Taxi({id , userid, name, email, address,date ,phone})
    

    try {
        bookTaxi.save()
        res.send("taxi booked")
       

    } catch (e) {
        return res.status(400).json({message: e});
    }

})

router.post('/getorderedtaxi', async (req, res) => {
    const {userid} = req.body

    try{
    const taxiorders = await Taxi.find({userid : userid}).sort({_id : -1})
    res.send(taxiorders)

    }catch(e){
        return res.status(400).json({message: e});
    }

})

router.post('/deletetaxiorder', async(req, res) => {
    const taxiid = req.body.taxiid
    try{
    await Taxi.findOneAndDelete({_id: taxiid});
       res.send("booking deleted successfully");
 
    }catch(e){
          
       return res.status(400).json({message: e});
    }
    }
 )

 router.get('/getalltaxi', async (req, res) => {

    try{
    const taxi = await Taxi.find({}).sort({_id : -1})
    res.send(taxi)

    }catch(e){
        return res.status(400).json({message: e});
    }

})

module.exports = router;