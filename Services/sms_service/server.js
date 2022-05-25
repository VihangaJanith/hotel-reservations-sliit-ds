const express = require('express');


const db = require('./db');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());


const sms = require('./routes/sms.js');


app.use('/api/sms/', sms);

app.get('/', (req, res) => {
    res.send('Server Working');
});

const port = process.env.PORT || 5004;

app.listen(port, () => console.log(`Sms Service started on port ${port}`));
