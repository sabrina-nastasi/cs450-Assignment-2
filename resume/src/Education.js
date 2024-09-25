import React from 'react';

function Education({ data }) {
  return (
    <section className="education">
      <div className="section-title">
        <h3>Education</h3>
      </div>
      <div className="section-content">
        {data.map((education, index) => (
          <div key={index} className="education-item">
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p>{education.year}</p>
            <p>GPA: {education.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
