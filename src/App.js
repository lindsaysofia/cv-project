import React, { useState } from 'react';
import './styles/App.css';
import CVInput from './components/CVInput';
import CVDisplay from './components/CVDisplay';
import html2pdf from 'html2pdf.js';
import photo from "./img/photo.png";

function App() {
  const exampleData = {
    personalInformation: {
      firstName: 'Bob',
      lastName: 'the Builder',
      title: 'Construction Worker',
      description: 'Can we fix it? Yes, we can!',
      location: 'Fixham Harbour',
      phone: '123-456-7890',
      email: 'bob@icanfixthat.com',
      websites: [
      {
        websiteName: 'github',
        websiteLink: 'https://github.com/bobTheBuilder',
      },
      {
        websiteName: 'github',
        websiteLink: 'https://github.com/bobTheBuilder',
      }
    ],
    },
    skills: ['Problem-Solving', 'A Can-Do Attitude'],
    educations: [
      {
        university: 'University of Bobsville',
        location: 'Bobsville, United Kingdom',
        degree: 'B.A.',
        subject: 'Construction',
        from: '1997',
        to: 'Present',
      },
      {
        university: 'University of Bobsville',
        location: 'Bobsville, United Kingdom',
        degree: 'B.A.',
        subject: 'Construction',
        from: '1997',
        to: 'Present',
      }
    ],
    experiences: [
      {
        position: 'Owner',
        company: `Bob's Yard`,
        location: 'Bobsville, United Kingdom',
        from: '1997',
        to: '2007',
        description: 'Built and maintained the yard with my father, Robert, and the Can-Do Crew',
      },
      {
        position: 'Owner',
        company: `Bob's Yard`,
        location: 'Bobsville, United Kingdom',
        from: '1997',
        to: '2007',
        description: 'Built and maintained the yard with my father, Robert, and the Can-Do Crew',
      }
    ],
  };

  const resetData = {
    personalInformation: {
      firstName: '',
      lastName: '',
      title: '',
      description: '',
      location: '',
      phone: '',
      email: '',
      websites: [
        {
          websiteName: '',
          websiteLink: '',
        }
      ],
    },
    skills: [''],
    educations: [
      {
        university: '',
        location: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      },
    ],
    experiences: [
      {
        position: '',
        company: ``,
        location: '',
        from: '',
        to: '',
        description: '',
      },
    ],
  };

  const [data, setData] = useState(resetData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { parent, index } = e.target.dataset;
    switch (parent) {
      case 'personalInformation':
        setData((prevData) => {
          return {
            ...prevData,
            personalInformation: {
              ...prevData.personalInformation,
              [name]: value,
            }
          }
        })
        break;
      case 'websites':
        setData((prevData => {
          const websitesCopy = prevData.personalInformation.websites.slice();
          websitesCopy[index][name] = value;
          return {
            ...prevData,
            personalInformation: {
              ...prevData.personalInformation,
              websites: websitesCopy,
            }
          }
        }));
        break;
      case 'skills':
        setData((prevData) => {
          const skillsCopy = prevData.skills.slice();
          skillsCopy[index] = value;
          return {
            ...prevData,
            skills: skillsCopy,
          }
        });
        break;
      case 'educations':
        setData((prevData) => {
          const educationsCopy = prevData.educations.slice();
          educationsCopy[index][name] = value;
          return {
            ...prevData,
            educations: educationsCopy,
          }
        });
        break;
      case 'experiences':
        setData((prevData) => {
          const experiencesCopy = prevData.experiences.slice();
          experiencesCopy[index][name] = value;
          return {
            ...prevData,
            experiences: experiencesCopy,
          }
        });
        break;
      default:
        break;
    }
  };

  const handleAdd = (e) => {
    const { parent } = e.target.dataset;
    switch (parent) {
      case 'websites':
        setData((prevData) => {
          const websitesCopy = prevData.personalInformation.websites.slice();
          websitesCopy.push({
            websiteName: '',
            websiteLink: '',
          });
          return {
            ...prevData,
            personalInformation: {
              ...prevData.personalInformation,
              websites: websitesCopy,
            }
          }
        });
        break;
      case 'skills':
        setData((prevData) => {
          const skillsCopy = prevData.skills.slice();
          skillsCopy.push('');
          return {
            ...prevData,
            skills: skillsCopy,
          }
        });
        break;
      case 'educations':
        setData((prevData) => {
          const educationsCopy = prevData.educations.slice();
          educationsCopy.push({
            university: '',
            location: '',
            degree: '',
            subject: '',
            from: '',
            to: '',
          });
          return {
            ...prevData,
            educations: educationsCopy,
          }
        });
        break;
      case 'experiences':
        setData((prevData) => {
          const experiencesCopy = prevData.experiences.slice();
          experiencesCopy.push({
            position: '',
            company: ``,
            location: '',
            from: '',
            to: '',
            description: '',
          });
          return {
            ...prevData,
            experiences: experiencesCopy,
          }
        });
        break;
      default:
        break;
    }
  };

  const handleDelete = (e) => {
    const { parent, index } = e.target.dataset;
    switch (parent) {
      case 'websites':
        setData((prevData) => {
          const websitesCopy = prevData.personalInformation.websites.filter((website, websiteIndex) => websiteIndex !== Number(index));
          return {
            ...prevData,
            personalInformation: {
              ...prevData.personalInformation,
              websites: websitesCopy,
            }
          }
        });
        break;
      case 'skills':
        setData((prevData) => {
          const skillsCopy = prevData.skills.filter((skill, skillIndex) => skillIndex !== Number(index));
          return {
            ...prevData,
            skills: skillsCopy,
          }
        });
        break;
      case 'educations':
        setData((prevData) => {
          const educationsCopy = prevData.educations.filter((education,educationIndex) =>educationIndex !== Number(index));
          return {
            ...prevData,
            educations: educationsCopy,
          }
        });
        break;
      case 'experiences':
        setData((prevData) => {
          const experiencesCopy = prevData.experiences.filter((experience,experienceIndex) => experienceIndex !== Number(index));
          return {
            ...prevData,
            experiences: experiencesCopy,
          }
        });
        break;
      default:
        break;
    }
  };

  const handleExample = () => {
    let img = document.querySelector('img');
    img.src = photo;
    setData(exampleData);
  };

  const handleReset = () => {
    let img = document.querySelector('img');
    img.src = '';
    setData(resetData);
  };

  const generatePDF = () => {
    const element = document.getElementById('pdf');
    html2pdf(element);
  };

  // from https://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form/34840295

  const uploadPhoto = () => {
    let preview = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  };

  return (
    <div className="app">
      <CVInput 
        data={data} 
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleExample={handleExample}
        handleReset={handleReset}
        generatePDF={generatePDF}
        uploadPhoto={uploadPhoto}
      />
      <CVDisplay data={data}/>
    </div>
  );
}

export default App;
