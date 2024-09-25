import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const [resumeData] = useState({
    name: "Zh Rimel",
    title: "Data Scientist",
    contact: {
      email: "abc@gmail.com",
      web: "https://abc.github.io/abc",
      mobile: "01234567890"
    },
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    workExperience: [
      {
        jobTitle: "Job Title at Company",
        duration: "August 2022 – December 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      {
        jobTitle: "Job Title 2 at Company 2",
        duration: "August 2020 – December 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      }
    ],
    skills: ["A Key Skill", "Another Key Skill", "A Third Key Skill"],
    education: [
      {
        school: "New Jersey Institute of Technology",
        degree: "BS in Computer Science",
        year: "2018 - 2022",
        gpa: "3.9"
      },
      {
        school: "New Jersey Institute of Technology",
        degree: "MS in Data Science",
        year: "2022 - 2023",
        gpa: "4.0"
      }
    ]
  });

  return (
    <div className="App">
      <Header data={resumeData} />
      <PersonalProfile data={resumeData.profile} />
      <WorkExperience data={resumeData.workExperience} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
    </div>
  );
}

export default App;
