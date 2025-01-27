const express = require('express');
const router = express.Router();
const Test = require('../controllers/gfg-test-controller')

router.get('/test', Test, (req, res)=>{
    res.json({
        Message : "Test successfull!"
    })
});

module.exports = router;