const mongoose = require('mongoose');
const { Schema } = mongoose;

const meetingsSchema = new Schema({
    date: { type: String, required: true },
    weight: { type: number, required: true }
})
const MeetingsModel = mongoose.model('meeting', meetingsSchema);
module.exports = {MeetingsModel,meetingsSchema};