const mongoose = require("mongoose");
const Coach = require("./models/Coach");
const Coachee = require("./models/Coachee");

mongoose.connect("mongodb+srv://Pritig15:Coachee123@cluster0.mhpwmfy.mongodb.net/myDatabase")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const seedData = async () => {
  await Coach.deleteMany({});
  await Coachee.deleteMany({});

  const coaches = [
    { name: "Coach A", expertise: ["JavaScript", "React"], industry: "IT", experience: 8, style: "friendly", language: "English" },
    { name: "Coach B", expertise: ["Java", "Spring"], industry: "IT", experience: 10, style: "professional", language: "English" },
    { name: "Coach C", expertise: ["Python", "ML"], industry: "IT", experience: 6, style: "friendly", language: "English" },

    // ➕ ADD MORE (for Top 5)
    { name: "Coach D", expertise: ["leadership", "management"], industry: "IT", experience: 9, style: "professional", language: "English" },
    { name: "Coach E", expertise: ["communication", "confidence"], industry: "IT", experience: 5, style: "friendly", language: "English" }
  ];

  const coachees = [
    { name: "Coachee 1", goals: ["React", "Career Growth"], industry: "IT", preferredStyle: "friendly", language: "English" },
    { name: "Coachee 2", goals: ["Java", "Leadership"], industry: "IT", preferredStyle: "professional", language: "English" }
  ];

  await Coach.insertMany(coaches);
  await Coachee.insertMany(coachees);

  console.log("Sample data inserted");
  mongoose.connection.close();
};

seedData();
