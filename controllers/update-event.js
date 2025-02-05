const eventModel = require('../models/event-model')


const UpdateEvent = async (req, res) => {
    const UpdatedBody =  req.body;
    const id = req.params.id;
    const Event = await eventModel.findOne({_id : id});
    if(!Event) return res.statu(400).json({
        message : "Unable to update the event at the moment"
    });
    const UpdatedEvent = await eventModel.findByIdAndUpdate(
        id,
        UpdatedBody,
        {
            new : true,
            runValidators : true
        }
    )
    res.status(200).json({
        message : UpdatedEvent
    })
}

module.exports = UpdateEvent;

