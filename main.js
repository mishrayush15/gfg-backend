const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const testRoute = require('./routes/gfg-test-router')
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Connected to database!");
    })
    .catch(()=>{
        console.error("Unable to connect to the database!");
    });

app.use('/api/v1', testRoute)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

//for the moment I am pushing my .envs to github. TODO: remove .envs in future pushes