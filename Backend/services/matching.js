const Coach = require("../models/Coach");

const matchCoachee = async (coachee) => {
    const coaches = await Coach.find();

    const results = coaches.map(coach => {
        let score = 0;
        let reasons = []; // ✅ NEW

        // 🔧 Normalize
        const goals = coachee.goals.map(g => g.toLowerCase());
        const devAreas = (coachee.developmentAreas || []).map(d => d.toLowerCase());

        // ✅ Expertise match (Goals)
        const expertiseMatch = coach.expertise.filter(skill =>
            goals.includes(skill.toLowerCase())
        ).length;

        if (expertiseMatch > 0) {
            score += expertiseMatch * 30;
            reasons.push("Matches your goals"); // ✅
        }

        // ✅ Development Areas match
        const devMatch = coach.expertise.filter(skill =>
            devAreas.includes(skill.toLowerCase())
        ).length;

        if (devMatch > 0) {
            score += devMatch * 20;
            reasons.push("Supports your development areas"); // ✅
        }

        // ✅ Industry match
        if (coach.industry === coachee.industry) {
            score += 15;
            reasons.push("Same industry experience");
        }

        // ✅ Style match
        if (coach.style === coachee.preferredStyle) {
            score += 10;
            reasons.push("Preferred coaching style");
        }

        // ✅ Language match
        if (coach.language === coachee.language) {
            score += 10;
            reasons.push("Speaks your language");
        }

        // ✅ Role Level bonus
        if (coachee.roleLevel && coachee.roleLevel.trim() !== "") {
            score += 5;
            reasons.push("Suitable for your role level");
        }

        // ✅ Experience factor
        score += Math.min(coach.experience, 10) * 1;

        return { coach, score, reasons }; // ✅ UPDATED
    });

    // 🔥 Sort and return TOP 5
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 5);
};

module.exports = matchCoachee;
