const express = require('express');
const router = express.Router();
const Package = require('../models/packageModel');

router.get('/getallpackages', async(req, res) => {
 try{
    const packages = await Package.find({});
    res.send(packages);
 }catch(e){
    return res.status(400).json({message: e});
 }

});

router.post('/addpackage', async(req, res) => {
   const package = req.body.pack;

   try{

   const newpackage = new Package({
    name: package.name,
    image: package.image,
    varients: ['TwoPerson', 'FourPerson', 'Family'],
    description: package.description,
   category: package.category,
   prices: [package.prices]

   })
        
   await newpackage.save();
   res.send("Package added successfully");

}catch(e){

    return res.status(400).json({message: e});
}


})

router.post('/getpackagebyid', async(req, res) => {
   const packageid = req.body.packageid
   try{
      const package = await Package.findOne({_id: packageid});
      res.send(package);

   }catch(e){
         
      return res.status(400).json({message: e});
   }
   }

)

router.post ("/editpackage" , async(req, res) => {

      const editedpackage = req.body.editedpackage;
      try{
         const package = await Package.findOneAndUpdate({_id: editedpackage._id}, editedpackage);
      package.name = editedpackage.name;
      package.image = editedpackage.image;
      package.description = editedpackage.description;
      package.category = editedpackage.category;
      package.prices = [editedpackage.prices];

      await package.save();       
         res.send("Package edited successfully");

      }catch(e){
         return res.status(400).json({message: e});
      }
   

}) 

router.post('/deletepackage', async(req, res) => {
   const packageid = req.body.packageid
   try{
   await Package.findOneAndDelete({_id: packageid});
      res.send("Package deleted successfully");

   }catch(e){
         
      return res.status(400).json({message: e});
   }
   }
)





module.exports = router;