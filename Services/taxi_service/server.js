const express = require('express');

const Taxi = require('./models/taxiModel');

const db = require('./db');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());


const taxiRoute = require('./routes/taxiRoute.js');



app.use('/api/taxi/', taxiRoute);






app.get('/', (req, res) => {
    res.send('Server Working');
});




const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Taxi Service is started on port ${port}`));
