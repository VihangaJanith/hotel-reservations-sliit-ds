const express = require('express');


const db = require('./db');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());


const userRoute = require('./routes/userRoute.js');



app.use('/api/users/', userRoute);






app.get('/', (req, res) => {
    res.send('Server Working');
});




const port = process.env.PORT || 5003;

app.listen(port, () => console.log(`User Authentication Service is started on port ${port}`));
