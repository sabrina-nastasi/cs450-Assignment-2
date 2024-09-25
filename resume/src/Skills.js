import React from 'react';

function Skills({ data }) {
  return (
    <section className="skills">
      <div className="section-title">
        <h3>Key Skills</h3>
      </div>
      <ul className="skills-list">
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
