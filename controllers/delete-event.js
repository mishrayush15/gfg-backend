const eventModel = require('../models/event-model')

const DeleteEvent = async (req, res) => {
    try{
        const DeletedEvent = await eventModel.deleteOne({_id : req.params.id});
        if(!DeleteEvent) return res.status(400).json({
            message : "Unable to delete event at the moment!"
        });
        res.status(200).json({
            message : "Event deleted successfully!"
        })
    }catch(e){
        res.status(500).json({
            message : "Unable to delete event at the moment!"
        })
    }
}

module.exports = DeleteEvent;