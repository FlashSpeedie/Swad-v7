import React, { useState } from 'react';
import { db } from './firebase';
import { ref, set } from 'firebase/database';  
import './Grading.css';
// The critieria for grading
const criteria = [
  {
    title: "Theme",
    multiplier: 2,
    description: [
      "The annual theme is not addressed.",
      "The annual theme is somewhat addressed, but the supporting pages do not adequately support or contribute to the overall design.",
      "The annual theme is addressed and is reflected in the supporting pages."
    ]
  },
  {
    title: "Challenge",
    multiplier: 3,
    description: [
      "The challenge is not addressed, or addressed but not in detail; it is generally ineffective, and/or missing many parts of the required research and presentation; unrelated or distracting elements are present.",
      "The challenge solution is generally well presented; it addresses most major parts of the required research and presentation; there are few or no unrelated or distracting elements.",
      "The design brief solution is well presented, well researched, and highly effective; all expected components are present, and additional related elements that enhance the final product are incorporated; there are no unrelated or distracting elements."
    ]
  },
  {
    title: "Content",
    multiplier: 2,
    description: [
      "The content lacks originality and does not contribute to the overall design of the webpage; the content does not align with the purpose of the website.",
      "Very basic information is presented; the content aligns somewhat with the purpose of the website; some pages are irrelevant.",
      "The content aligns well with the purpose of the website and adds to its effectiveness."
    ]
  },
  {
    title: "Layout and Navigation",
    multiplier: 2,
    description: [
      "The web pages are cluttered and confusing; it is often difficult to locate important elements; the navigation structure is unclear, unintuitive, and ineffective in getting users to relevant information.",
      "The web pages have a reasonably usable layout, and all major elements can be found; the design is generally pleasing to the user; the navigation structure is generally effective and intuitive, and provides reasonable ability to navigate the website.",
      "The layout is exceptionally user-friendly; the relationship of elements and content are effective and attractive to the viewer; the navigation structure is highly intuitive, and provides efficient access to all pertinent information on the website."
    ]
  },
  {
    title: "Graphics and Color Scheme",
    multiplier: 2,
    description: [
      "Graphic content is nonexistent or of low quality and questionable relation to the topic; colors are of poor contrast and detract from the user experience.",
      "Graphic content effectively relates to the purpose of the site, provides enhancement of the user experience, and is of acceptable quality; the color scheme is effective and does not detract from the viewer's experience.",
      "Graphics are well-used, of high quality, and clearly enhance the user experience; interactive elements effectively engage the user; the color scheme is attractive, appropriate, and clearly enhances the viewing experience."
    ]
  },
  {
    title: "Function and Compatibility",
    multiplier: 1,
    description: [
      "There are several broken links and images, and/or the website does not render properly on multiple browsers.",
      "There are no broken images, and/or few, if any, broken links; the website renders properly on most major browsers.",
      "There are no broken images or links; the website renders properly on most major browsers and is usable on mobile devices."
    ]
  },
  {
    title: "Spelling and Grammar",
    multiplier: 1,
    description: [
      "There are numerous spelling and grammatical errors.",
      "There are only a few spelling and/or grammatical errors.",
      "There are few, if any, spelling and grammatical errors."
    ]
  }
];

export default function Grading() {
  const [name, setName] = useState('');
  const [scores, setScores] = useState(Array(criteria.length).fill(0));
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = value;
    setScores(newScores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError('Please provide your name.');
      return;
    }

    const total = scores.reduce((acc, score, idx) => {
      return acc + (score * criteria[idx].multiplier);
    }, 0);

    const gradeData = {
      scores: criteria.reduce((acc, item, index) => {
        acc[`${item.title} (x${item.multiplier})`] = scores[index];
        return acc;
      }, {}),
      feedback,
      total,
      timestamp: new Date().toISOString(),
    };

    const gradeRef = ref(db, `grades/${name}`);
    
    set(gradeRef, gradeData)
      .then(() => {
        setError('');
        alert('Grade submitted successfully!');
        setName('');
        setScores(Array(criteria.length).fill(0));
        setFeedback('');
      })
      .catch((err) => {
        console.error('Error submitting grade:', err);
        setError('Failed to submit grade. Please try again.');
      });
  };

  return (
    <div className="grading-form">
      <h1>Grading Form</h1>

      {error && <div className="error-message">{error}</div>}

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>CRITERIA</th>
            <th>Minimal Performance<br />1-4 points</th>
            <th>Adequate Performance<br />5-8 points</th>
            <th>Exemplary Performance<br />9-10 points</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((item, i) => (
            <tr key={i}>
              <td>{item.title} (×{item.multiplier})</td>
              <td>{item.description[0]}</td>
              <td>{item.description[1]}</td>
              <td>{item.description[2]}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={scores[i]}
                  onChange={(e) => handleChange(i, parseInt(e.target.value) || 0)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
