const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Kry14IppFV46PpQ87ZKsImeawBxxAYfdwBG9xfSZWPKj80O0wW6mSAjzDXUVjmnA6vlnoopGUOaSIUZVmV60mng00liG38ZCh')
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel');



//Create Reservation
router.post('/placeorder', async (req, res) => {

    const {token,subtotal, currentUser,cartItems} = req.body

    try{
    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    })
    const payment = await stripe.charges.create({
        amount: subtotal * 100,
        currency: 'lkr',
        customer: customer.id,
        receipt_email: token.email,
    },{
        idempotencyKey: uuidv4()
    } )

    if(payment){
        const newOrder = new Order({
            name: currentUser.name,
            email: currentUser.email,
            userid: currentUser._id,
            orderItems: cartItems,
            date:cartItems.date,
            orderAmount: subtotal,
            shippingAddress: {
                street: token.card.address_line1,
                city: token.card.address_city,
                country: token.card.address_country,
                pincode: token.card.address_zip
            },
            transactionId: payment.source.id,
            
        })
        newOrder.save()
        res.send("order placed successfully")
    }else{
        res.send("payment failed")
    }


    }
    catch(error){
        return res.status(400).json({message: error});
    }


})
//Get User Created Reservations
router.post('/getuserorders', async (req, res) => {
    const {userid} = req.body

    try{
    const orders = await Order.find({userid : userid}).sort({_id : -1})
    res.send(orders)

    }catch(e){
        return res.status(400).json({message: e});
    }

})
//Get All Reservations
router.get('/getallorders', async (req, res) => {

    try{
    const orders = await Order.find({}).sort({_id : -1})
    res.send(orders)

    }catch(e){
        return res.status(400).json({message: e});
    }

})
//Create Active Customer
router.post('/deliverorder', async (req, res) => {
    const orderid = req.body.orderid

    try{
    const order = await Order.findOne({_id: orderid})
    order.isDelivered = true
    await order.save()
    res.send("order delivered successfully")

    }catch(e){
        return res.status(400).json({message: e});
    }


})
//Get Reservation By ID
router.post('/getorderbyid', async(req, res) => {
    const orderid = req.body.orderid
    try{
       const order = await Order.findOne({_id: orderid});
       res.send(order);
 
    }catch(e){
          
       return res.status(400).json({message: e});
    }
    }
 
 )
//Cancel Reservation
 router.post('/deleteorder', async(req, res) => {
    const orderid = req.body.orderid
    try{
    await Order.findOneAndDelete({_id: orderid});
       res.send("booking deleted successfully");
 
    }catch(e){
          
       return res.status(400).json({message: e});
    }
    }
 )





module.exports = router;