import React, { useState } from 'react';
import './styles/App.css';
import CVInput from './components/CVInput';
import CVDisplay from './components/CVDisplay';
import html2pdf from 'html2pdf.js';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.exampleData = {
//       personalInformation: {
//         firstName: 'Bob',
//         lastName: 'the Builder',
//         title: 'Construction Worker',
//         description: 'Can we fix it? Yes, we can!',
//         location: 'Fixham Harbour',
//         phone: '123-456-7890',
//         email: 'bob@icanfixthat.com',
//         websites: [
//         {
//           websiteName: 'github',
//           websiteLink: 'https://github.com/bobTheBuilder',
//         },
//         {
//           websiteName: 'github',
//           websiteLink: 'https://github.com/bobTheBuilder',
//         }
//       ],
//       },
//       skills: ['Problem-Solving', 'A Can-Do Attitude'],
//       educations: [
//         {
//           university: 'University of Bobsville',
//           location: 'Bobsville, United Kingdom',
//           degree: 'B.A.',
//           subject: 'Construction',
//           from: '1997',
//           to: 'Present',
//         },
//         {
//           university: 'University of Bobsville',
//           location: 'Bobsville, United Kingdom',
//           degree: 'B.A.',
//           subject: 'Construction',
//           from: '1997',
//           to: 'Present',
//         }
//       ],
//       experiences: [
//         {
//           position: 'Owner',
//           company: `Bob's Yard`,
//           location: 'Bobsville, United Kingdom',
//           from: '1997',
//           to: '2007',
//           description: 'Built and maintained the yard with my father, Robert, and the Can-Do Crew',
//         },
//         {
//           position: 'Owner',
//           company: `Bob's Yard`,
//           location: 'Bobsville, United Kingdom',
//           from: '1997',
//           to: '2007',
//           description: 'Built and maintained the yard with my father, Robert, and the Can-Do Crew',
//         }
//       ],
//     };
//     this.resetData = {
//       personalInformation: {
//         firstName: '',
//         lastName: '',
//         title: '',
//         description: '',
//         location: '',
//         phone: '',
//         email: '',
//         websites: [
//           {
//             websiteName: '',
//             websiteLink: '',
//           }
//         ],
//       },
//       skills: [''],
//       educations: [
//         {
//           university: '',
//           location: '',
//           degree: '',
//           subject: '',
//           from: '',
//           to: '',
//         },
//       ],
//       experiences: [
//         {
//           position: '',
//           company: ``,
//           location: '',
//           from: '',
//           to: '',
//           description: '',
//         },
//       ],
//     };
//     this.state = this.resetData;
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     const { parent, index } = e.target.dataset;
//     switch (parent) {
//       case 'personalInformation':
//         this.setState((prevState) => {
//           return {
//             personalInformation: {
//               ...prevState.personalInformation,
//               [name] : value,
//             }
//           }
//         });
//         break;
//       case 'websites':
//         this.setState((prevState) => {
//           const websitesCopy = prevState.personalInformation.websites.slice();
//           websitesCopy[index][name] = value;
//           return {
//             personalInformation: {
//               ...prevState.personalInformation,
//               websites: websitesCopy,
//             }
//           }
//         });
//         break;
//       case 'skills':
//         this.setState((prevState) => {
//           const skillsCopy = prevState.skills.slice();
//           skillsCopy[index] = value;
//           return {
//             skills: skillsCopy,
//           }
//         });
//         break;
//       case 'educations':
//         this.setState((prevState) => {
//           const educationsCopy = prevState.educations.slice();
//           educationsCopy[index][name] = value;
//           return {
//             educations: educationsCopy,
//           }
//         });
//         break;
//       case 'experiences':
//         this.setState((prevState) => {
//           const experiencesCopy = prevState.experiences.slice();
//           experiencesCopy[index][name] = value;
//           return {
//             experiences: experiencesCopy,
//           }
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   handleAdd = (e) => {
//     const { parent } = e.target.dataset;
//     switch (parent) {
//       case 'websites':
//         this.setState((prevState) => {
//           const websitesCopy = prevState.personalInformation.websites.slice();
//           websitesCopy.push({
//             websiteName: '',
//             websiteLink: '',
//           });
//           return {
//             personalInformation: {
//               ...prevState.personalInformation,
//               websites: websitesCopy,
//             }
//           }
//         });
//         break;
//       case 'skills':
//         this.setState((prevState) => {
//           const skillsCopy = prevState.skills.slice();
//           skillsCopy.push('');
//           return {
//             skills: skillsCopy,
//           }
//         });
//         break;
//       case 'educations':
//         this.setState((prevState) => {
//           const educationsCopy = prevState.educations.slice();
//           educationsCopy.push({
//             university: '',
//             location: '',
//             degree: '',
//             subject: '',
//             from: '',
//             to: '',
//           });
//           return {
//             educations: educationsCopy,
//           }
//         });
//           break;
//       case 'experiences':
//         this.setState((prevState) => {
//           const experiencesCopy = prevState.experiences.slice();
//           experiencesCopy.push({
//             position: '',
//             company: ``,
//             location: '',
//             from: '',
//             to: '',
//             description: '',
//           });
//           return {
//             experiences: experiencesCopy,
//           }
//         });
//           break;
//       default:
//         break;
//     }
//   };

//   handleDelete = (e) => {
//     const { parent, index } = e.target.dataset;
//     switch (parent) {
//       case 'websites':
//         this.setState((prevState) => {
//           const websitesCopy = prevState.personalInformation.websites.filter((website, websiteIndex) => websiteIndex !== Number(index));
//           return {
//             personalInformation: {
//               ...prevState.personalInformation,
//               websites: websitesCopy,
//             }
//           }
//         });
//         break;
//       case 'skills':
//         this.setState((prevState) => {
//           const skillsCopy = prevState.skills.filter((skill, skillIndex) => skillIndex !== Number(index));
//           return {
//             skills: skillsCopy,
//           }
//         });
//         break;
//       case 'educations':
//         this.setState((prevState) => {
//           const educationsCopy = prevState.educations.filter((education,educationIndex) =>educationIndex !== Number(index));
//           return {
//             educations: educationsCopy,
//           }
//         });
//         break;
//       case 'experiences':
//         this.setState((prevState) => {
//           const experiencesCopy = prevState.experiences.filter((experience,experienceIndex) => experienceIndex !== Number(index));
//           return {
//             experiences: experiencesCopy,
//           }
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   handleExample = () => {
//     this.setState(this.exampleData);
//   };

//   handleReset = () => {
//     this.setState(this.resetData);
//   };

//   generatePDF = () => {
//     const element = document.getElementById('pdf');
//     html2pdf(element);
//   };

//   // from https://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form/34840295

//   uploadPhoto = () => {
//     let preview = document.querySelector('img');
//     let file = document.querySelector('input[type=file]').files[0];
//     let reader = new FileReader();
  
//     reader.onloadend = function () {
//       preview.src = reader.result;
//     }
  
//     if (file) {
//       reader.readAsDataURL(file);
//     } else {
//       preview.src = "";
//     }
//   };

//   render() {
//     return (
//       <div className="app">
//         <CVInput 
//           data={this.state} 
//           handleChange={this.handleChange}
//           handleAdd={this.handleAdd}
//           handleDelete={this.handleDelete}
//           handleExample={this.handleExample}
//           handleReset={this.handleReset}
//           generatePDF={this.generatePDF}
//           uploadPhoto={this.uploadPhoto}
//         />
//         <CVDisplay data={this.state}/>
//       </div>
//     );
//   }
// }

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
    setData(exampleData);
  };

  const handleReset = () => {
    this.setState(this.resetData);
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
