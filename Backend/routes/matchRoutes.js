const express = require("express");
const router = express.Router();

const Coach = require("../models/Coach");
const { calculateScore } = require("../services/matchingService");

router.post("/", async (req, res) => {
    try {
        const coachee = req.body;

        const coaches = await Coach.find();

        const results = coaches.map(coach => {
            const { score, reason } = calculateScore(coach, coachee);

            return {
                name: coach.name,
                score,
                reason
            };
        });

        // Sort by score (descending)
        results.sort((a, b) => b.score - a.score);

        // Top 5
        const top5 = results.slice(0, 5);

        res.json(top5);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
