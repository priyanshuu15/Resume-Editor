import React, { useState } from 'react';
import './App.css';


function App() {
  const [resume, setResume] = useState({
    name: '',
    summary: '',
    education: '',
    skills: '',
  });

  const handleChange = (field, value) => {
    setResume({ ...resume, [field]: value });
  };

  const enhanceSection = async (sectionName) => {
    const response = await fetch('http://127.0.0.1:8000/ai-enhance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        section: sectionName,
        content: resume[sectionName],
      }),
    });

    const data = await response.json();
    setResume({ ...resume, [sectionName]: data.enhanced_content });
  };
const handleUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Mock parsing logic (actual file content ignore)
    const mockData = {
      name: "John Doe",
      summary: "Experienced full-stack developer with 5+ years in web development.",
      education: "B.Tech in Computer Science from ABC University.",
      skills: "JavaScript, React, Node.js, Python",
      experience: "Worked at XYZ Corp for 3 years as a Software Engineer."
    };
    setResume(mockData);
    alert(`📄 "${file.name}" uploaded & parsed successfully!`);
  }
};

  const saveResume = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/save-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });
    if (response.ok) {
      alert("✅ Resume saved successfully!");
    }
  } catch (error) {
    alert("❌ Failed to save resume");
    console.error(error);
  }
};

  return (
    <div className='container'>
      <h1 className='heading'>Resume Editor</h1>

      {/* Name */}
      <div className='field-container'>
        <label className='label'>Name:</label>
        <input
          type="text"
          value={resume.name}
          onChange={(e) => handleChange('name', e.target.value)} 
        />
        <button className="button" onClick={() => enhanceSection("name")}>Enhance with AI</button>
      </div>

      {/* Summary
      <div>
        <label>Summary:</label>
        <textarea
          rows="3"
          value={resume.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
        />
        
      </div> */}

      {/* Education */}
      <div className="field-container">
        <label className='label'>Education:</label>
        <textarea
          rows="3"
          value={resume.education}
          onChange={(e) => handleChange('education', e.target.value)}
        />
         <button className='button' onClick={() => enhanceSection('education')}>Enhance with AI</button>
      </div>

      {/* Skills */}
      <div className='field-container'>
        <label className='label'>Skills:</label>
        <textarea
          rows="2"
          value={resume.skills}
          onChange={(e) => handleChange('skills', e.target.value)}
        />
        <button className='button' onClick={() => enhanceSection('skills')}>Enhance with AI</button>
      </div>

      <div className='field-container'>
  <label className='label'>Experience</label>
  <textarea
    value={resume.experience}
    onChange={(e) =>
      setResume({ ...resume, experience: e.target.value })
    }
  />
  <button className='button' onClick={() => enhanceSection("experience")}>
    Enhance with AI
  </button>
</div>

{/* buttons */}
 <div className="buttons-group">
  <button className='button' onClick={saveResume}>💾 Save Resume</button>

<button className='button' onClick={() => {
  const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.json';
  link.click();
}}>
  ⬇️ Download Resume
</button>

<div className='field-container upload'>
  <label className='label'>Upload Resume (PDF/DOCX):</label>
  <input type="file" accept=".pdf,.docx" onChange={handleUpload} />
</div>
 </div>


    </div>
  );
}

export default App;
