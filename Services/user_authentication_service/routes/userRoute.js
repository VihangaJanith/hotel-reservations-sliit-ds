const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');



//Customer Registration
router.post('/register', async (req, res) => {

    const { name, email, password , phone } = req.body;
    const newUser = new User({name, email, password , phone});
    

    try {
        newUser.save()
        res.send("user registered")
       

    } catch (e) {
        return res.status(400).json({message: e});
    }

})
//Customer Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
    const user = await User.find({email, password})
   
    if(user.length > 0){
        
        const currentUser = {
            name: user[0].name,
            email: user[0].email,
            isAdmin: user[0].isAdmin,
            phone: user[0].phone,
            _id: user[0]._id,
            isHotelAdmin: user[0].isHotelAdmin,
            


        }
        res.send(currentUser)
      
    }
    else{
        return res.status(400).json({message: "user login failed"})

    }
 }catch(e){
        return res.status(400).json({message: "something went wrong"});
    }


})

//Get All User Details
router.get('/getallusers', async(req, res) => {
    try{
       const users = await User.find({});
       res.send(users);
    }catch(e){
       return res.status(400).json({message: e});
    }
   
   });

//Delete or Block User
   router.post('/deleteuser', async(req, res) => {
    const userid = req.body.userid
    try{
    await User.findOneAndDelete({_id: userid});
       res.send("User deleted successfully");
 
    }catch(e){
          
       return res.status(400).json({message: e});
    }
    }
 )
//Create Hotel Admin
 router.post('/makehoteladmin', async (req, res) => {
    const userid = req.body.userid

    try{
    const hadmin = await User.findOne({_id: userid})
    hadmin.isHotelAdmin = true
    await hadmin.save()
    res.send("H admin  successfully")

    }catch(e){
        return res.status(400).json({message: e});
    }


})
//Remove Hotel Admin
router.post('/removehoteladmin', async (req, res) => {
    const userid = req.body.userid

    try{
    const hadmin = await User.findOne({_id: userid})
    hadmin.isHotelAdmin = false
    await hadmin.save()
    res.send("H admin removed successfully")

    }catch(e){
        return res.status(400).json({message: e});
    }


})

module.exports = router;
