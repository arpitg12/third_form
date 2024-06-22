import React, { useState, useEffect } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';
    if (formData.surveyTopic === 'Technology' && !formData.favoriteProgrammingLanguage) {
      newErrors.favoriteProgrammingLanguage = 'Favorite Programming Language is required';
    }
    if (formData.surveyTopic === 'Technology' && (!formData.yearsOfExperience || formData.yearsOfExperience <= 0)) {
      newErrors.yearsOfExperience = 'Years of Experience is required and must be greater than 0';
    }
    if (formData.surveyTopic === 'Health' && !formData.exerciseFrequency) {
      newErrors.exerciseFrequency = 'Exercise Frequency is required';
    }
    if (formData.surveyTopic === 'Health' && !formData.dietPreference) {
      newErrors.dietPreference = 'Diet Preference is required';
    }
    if (formData.surveyTopic === 'Education' && !formData.highestQualification) {
      newErrors.highestQualification = 'Highest Qualification is required';
    }
    if (formData.surveyTopic === 'Education' && !formData.fieldOfStudy) {
      newErrors.fieldOfStudy = 'Field of Study is required';
    }
    if (!formData.feedback || formData.feedback.length < 50) {
      newErrors.feedback = 'Feedback is required and must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`https://api.example.com/questions?topic=${formData.surveyTopic}`);
        const data = await response.json();
        setAdditionalQuestions(data);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error fetching additional questions:', error);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Survey Topic:</label>
          <select name="surveyTopic" value={formData.surveyTopic} onChange={handleChange}>
            <option value="">Select a topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <span className="error">{errors.surveyTopic}</span>}
        </div>

        {formData.surveyTopic === 'Technology' && (
          <>
            <div className="form-group">
              <label>Favorite Programming Language:</label>
              <select
                name="favoriteProgrammingLanguage"
                value={formData.favoriteProgrammingLanguage}
                onChange={handleChange}
              >
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.favoriteProgrammingLanguage && <span className="error">{errors.favoriteProgrammingLanguage}</span>}
            </div>
            <div className="form-group">
              <label>Years of Experience:</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
              />
              {errors.yearsOfExperience && <span className="error">{errors.yearsOfExperience}</span>}
            </div>
          </>
        )}

        {formData.surveyTopic === 'Health' && (
          <>
            <div className="form-group">
              <label>Exercise Frequency:</label>
              <select
                name="exerciseFrequency"
                value={formData.exerciseFrequency}
                onChange={handleChange}
              >
                <option value="">Select a frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency && <span className="error">{errors.exerciseFrequency}</span>}
            </div>
            <div className="form-group">
              <label>Diet Preference:</label>
              <select
                name="dietPreference"
                value={formData.dietPreference}
                onChange={handleChange}
              >
                <option value="">Select a preference</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
              {errors.dietPreference && <span className="error">{errors.dietPreference}</span>}
            </div>
          </>
        )}

        {formData.surveyTopic === 'Education' && (
          <>
            <div className="form-group">
              <label>Highest Qualification:</label>
              <select
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
              >
                <option value="">Select a qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.highestQualification && <span className="error">{errors.highestQualification}</span>}
            </div>
            <div className="form-group">
              <label>Field of Study:</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
              />
              {errors.fieldOfStudy && <span className="error">{errors.fieldOfStudy}</span>}
            </div>
          </>
        )}

        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
          {errors.feedback && <span className="error">{errors.feedback}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className="form-summary">
          <h3>Form Submitted Successfully</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <h4>Additional Questions:</h4>
          <ul>
            {additionalQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
