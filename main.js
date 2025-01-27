const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const testRoute = require('./routes/gfg-test-router')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', testRoute)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

//for the moment I am pushing my .envs to github. TODO: remove .envs in future pushes