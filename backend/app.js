const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// routes
const userRoute = require('./routes/users');
const friendsRoute = require('./routes/friends');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/friends',friendsRoute);

app.get('/', (req,res)=>{
    res.send('teste');
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },console.log('connected to DB'));

app.listen(3000);