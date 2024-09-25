import React from 'react';

function Header({ data }) {
  return (
    <header>
      <div className="name-section">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
      </div>
      <div className="right-section">
        <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
        <p>Web: <a href={data.contact.web}>{data.contact.web}</a></p>
        <p>Mobile: {data.contact.mobile}</p>
      </div>
    </header>
  );
}

export default Header;
