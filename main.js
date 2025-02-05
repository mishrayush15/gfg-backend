const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const EventRoute = require('./routes/event-route')
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/posters', express.static('posters'));

mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Connected to database!");
    })
    .catch(()=>{
        console.error("Unable to connect to the database!");
    });

app.use('/api/v1', EventRoute)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

