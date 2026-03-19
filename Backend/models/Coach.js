const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
    name: String,
    expertise: [String],
    industry: String,
    experience: Number,
    style: String,
    language: String
});

module.exports = mongoose.model("Coach", coachSchema);
