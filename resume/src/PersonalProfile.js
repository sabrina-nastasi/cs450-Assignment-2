import React from 'react';

function PersonalProfile({ data }) {
  return (
    <section className="profile">
      <div className="section-title">
        <h3>Personal Profile</h3>
      </div>
      <div className="section-content">
        <p>{data}</p>
      </div>
    </section>
  );
}

export default PersonalProfile;
