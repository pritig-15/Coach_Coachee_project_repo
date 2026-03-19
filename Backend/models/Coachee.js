const mongoose = require("mongoose");

const coacheeSchema = new mongoose.Schema({
    name: String,
    goals: [String],
    industry: String,
    preferredStyle: String,
    language: String
});

module.exports = mongoose.model("Coachee", coacheeSchema);
