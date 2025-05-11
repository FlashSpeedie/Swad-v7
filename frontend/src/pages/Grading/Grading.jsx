import React, { useState } from "react";
import "./Grading.css";

const criteria = [
  { title: "Theme", weight: 2 },
  { title: "Challenge", weight: 3 },
  { title: "Content", weight: 2 },
  { title: "Layout and Navigation", weight: 2 },
  { title: "Graphics and Color Scheme", weight: 2 },
  { title: "Function and Compatibility", weight: 1 },
  { title: "Spelling and Grammar", weight: 1 },
];

const Grading = () => {
  const [scores, setScores] = useState(Array(criteria.length).fill(""));
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = parseInt(value) || 0;
    setScores(newScores);
  };

  const calculateTotal = () =>
    scores.reduce(
      (acc, score, i) => acc + (parseInt(score) || 0) * criteria[i].weight,
      0
    );

  const handleSubmit = async () => {
    const total = calculateTotal();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxvrQp6LQnxMgbAWwLpycF0BLS-Xj8mkXF2apXGtbJzWLLJzmaEAfd3l-7kRPXJwUeUfw/exec", {
        method: "POST",
        body: JSON.stringify({ name, scores, total, feedback }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (result.result === "Success") {
        setSubmitted(true);
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      alert("Error submitting to Google Sheets. Check console.");
      console.error(error);
    }
  };

  if (submitted) {
    return <div className="thank-you">✅ Thank you! Submission recorded.</div>;
  }

  return (
    <div className="grading-container">
      <h1>Preliminary Website Grading</h1>
      <label>
        <strong>Name:</strong>
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Weight</th>
            <th>Score (1–10)</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>X{item.weight}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={scores[index]}
                  onChange={(e) => handleScoreChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <label>
        <strong>Feedback:</strong>
        <textarea
          rows="4"
          placeholder="Write feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </label>

      <div className="total-score">Total: {calculateTotal()} / 130</div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Grading;
