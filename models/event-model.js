const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventPoster : {
        type : String,
        required : true
    },
    eventName : {
        type : String,
        required : true
    },
    eventDetails : {
        type : String,
        required : true
    },
    eventTiming : {
        type : String,
        required : true
    },
    eventVenue : {
        type : String,
        required : true
    },
    eventDate : {
        type : Date,
        required : true
    }
}, { timestamps : true });

module.exports = mongoose.model('event', EventSchema);