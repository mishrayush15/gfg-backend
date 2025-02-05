const express = require('express');
const router = express.Router();
const createEvent = require('../controllers/create-event')
const { GetAllEvents, GetEventById } = require('../controllers/fetch-event')
const DeleteEvent = require('../controllers/delete-event')
const UpdateEvent = require('../controllers/update-event');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './posters')
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now() + 'poster' + Math.round(Math.random() * 1E9) + file.originalname)
    }
})

const upload = multer({ storage });

router.post('/event/create', upload.single('poster'), createEvent)
router.get('/event/fetch', GetAllEvents)
router.get('/event/:id', GetEventById)
router.delete('/event/delete/:id', DeleteEvent)
router.put('/event/update/:id', UpdateEvent)

module.exports = router;