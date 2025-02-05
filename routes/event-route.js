const express = require('express');
const router = express.Router();
const createEvent = require('../controllers/create-event')
const { GetAllEvents, GetEventById } = require('../controllers/fetch-event')
const DeleteEvent = require('../controllers/delete-event')
const UpdateEvent = require('../controllers/update-event');
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './posters')
    },
    filename: function (req, file, cb) {
        const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueFilename);
    }
})

const upload = multer({ storage });

router.post('/event/create', upload.single('eventPoster'), createEvent)
router.get('/event/fetch', GetAllEvents)
router.get('/event/:id', GetEventById)
router.delete('/event/delete/:id', DeleteEvent)
router.put('/event/update/:id', UpdateEvent)

module.exports = router;