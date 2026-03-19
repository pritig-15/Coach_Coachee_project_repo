import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    goals: "",
    industry: "",
    roleLevel: "",
    developmentAreas: "",
    preferredStyle: "",
    language: ""
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/match", {
        goals: form.goals ? form.goals.split(",") : [],
        industry: form.industry,
        roleLevel: form.roleLevel,
        developmentAreas: form.developmentAreas
          ? form.developmentAreas.split(",")
          : [],
        preferredStyle: form.preferredStyle,
        language: form.language
      });

      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>🚀 Coach Recommendation System</h1>

      {/* 🔹 Input Form */}
      <div className="card">
        <div className="form-grid">
          
          <input
            name="goals"
            placeholder="Goals (e.g. leadership, career)"
            onChange={handleChange}
          />

          <input
            name="industry"
            placeholder="Industry"
            onChange={handleChange}
          />

          <input
            name="roleLevel"
            placeholder="Role Level (e.g. Student, Manager)"
            onChange={handleChange}
          />

          <input
            name="developmentAreas"
            placeholder="Development Areas (e.g. communication, leadership)"
            onChange={handleChange}
          />

          <input
            name="preferredStyle"
            placeholder="Coaching Style"
            onChange={handleChange}
          />

          <input
            name="language"
            placeholder="Language"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>Find Coaches</button>
      </div>

      {/* 🔥 Results Section */}
      <div className="results">
        {results.map((item, index) => (
          <div key={index} className="result-card">

            <h2>#{index + 1} - {item.coach?.name}</h2>

            <div className="score">Match: {item.score}%</div>

            <p><b>Expertise:</b> {item.coach?.expertise?.join(", ")}</p>

            <p><b>Industry:</b> {item.coach?.industry}</p>

            <p><b>Experience:</b> {item.coach?.experience} years</p>

            <p><b>Style:</b> {item.coach?.style}</p>

            <p><b>Language:</b> {item.coach?.language}</p>

            {/* ✅ NEW: WHY MATCH */}
            <p>
              <b>Why Match:</b>{" "}
              {item.reasons && item.reasons.length > 0
                ? item.reasons.join(", ")
                : "Good overall match"}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
