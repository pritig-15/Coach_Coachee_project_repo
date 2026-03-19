const express = require("express");
const router = express.Router();
const matchCoachee = require("../services/matching"); // ✅ path now exists

router.post("/", async (req, res) => {
    try {
        const coachee = req.body;
        const matches = await matchCoachee(coachee);
        res.json(matches);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
