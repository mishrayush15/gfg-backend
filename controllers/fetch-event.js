const eventModel = require('../models/event-model');


const GetAllEvents = async (req, res) => {
    try{const AllEvents = await eventModel.find();
    res.status(200).json({
        allEvents : AllEvents.reverse()
    })}
    catch(e){
        res.status(400).json({
            message : "Unable to get events at the moment!"
        })
    }
}

const GetEventById = async (req, res) => {
    try{const EventDetails = await eventModel.findOne({
        _id : req.params.id
    });
    if(!EventDetails) return res.status(404).json({
        message : "Unable to find the required event details!"
    });
    res.status(200).json({
        eventDetails : EventDetails
    })}
    catch(e){
        res.status(400).json({
            message : "Unable to find the required event details!"
        })
    }
}

module.exports = {GetAllEvents, GetEventById};