const express = require('express');
const router = express.Router();
const createEvent = require('../controllers/create-event')
const {GetAllEvents, GetEventById} = require('../controllers/fetch-event')
const DeleteEvent = require('../controllers/delete-event')
const UpdateEvent = require('../controllers/update-event');

router.post('/event/create', createEvent)
router.get('/event/fetch', GetAllEvents)
router.get('/event/:id', GetEventById)
router.delete('/event/delete/:id', DeleteEvent)
router.put('/event/update/:id', UpdateEvent)

module.exports = router;