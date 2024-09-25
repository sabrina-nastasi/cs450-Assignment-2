import React from 'react';

function WorkExperience({ data }) {
  return (
    <section className="work-experience">
      <div className="section-title">
        <h3>Work Experience</h3>
      </div>
      <div className="section-content">
        {data.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.jobTitle} <span>({job.duration})</span></h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
