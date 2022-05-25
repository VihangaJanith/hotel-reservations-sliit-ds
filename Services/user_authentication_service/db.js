const mongoose = require('mongoose');


var mongoURL = 'mongodb+srv://vjs9c:vjs9c@cluster0.8kweo.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

 
     var db = mongoose.connection;

     db.on('connected', () => {
            console.log('Connected to MongoDB');

     })

     db.on('error', () => {
            console.log('Error connecting to MongoDB: ');
     })



     module.exports = mongoose
