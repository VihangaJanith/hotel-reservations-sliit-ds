const express = require('express');


const db = require('./db');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());


const ordersRoute = require('./routes/ordersRoute.js');


app.use('/api/orders/', ordersRoute);

app.get('/', (req, res) => {
    res.send('Server Working');
});


const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Order Service is started on port ${port}`));
