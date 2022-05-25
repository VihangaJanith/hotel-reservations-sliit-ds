const express = require('express');


const db = require('./db');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());


const packageRoute = require('./routes/packageRoute.js');



app.use('/api/packages/', packageRoute);






app.get('/', (req, res) => {
    res.send('Server Working');
});




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Package Server is started on port ${port}`));
