const eventModel = require('../models/event-model')

const CreateEvent = async (req, res) => {
    const {eventPoster, eventName, eventDetails, eventTiming, eventVenue, eventDate} = await req.body;
    try{
        const NewEvent = await eventModel.create({
        eventPoster,
        eventName,
        eventDetails,
        eventTiming,
        eventVenue,
        eventDate
    });
    res.status(200).json({
        message : NewEvent
    })}
    catch(e){
        res.status(500).json({
            message : "Unable to add event at the moment!"
        })
    }
}

module.exports = CreateEvent;