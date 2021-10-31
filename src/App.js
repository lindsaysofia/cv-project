import React, { Component } from 'react';
import './styles/App.css';
import CVInput from './components/CVInput';
import CVDisplay from './components/CVDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.exampleData = {
      personalInformation: {
        firstName: 'Bob',
        lastName: 'the Builder',
        title: 'Construction Worker',
        description: 'Can we fix it? Yes, we can!',
        photo: '../img/photo.png',
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
    this.state = {
      personalInformation: {
        firstName: '',
        lastName: '',
        title: '',
        description: '',
        photo: '',
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
      skills: [],
      educations: [],
      experiences: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { parent, index } = e.target.dataset;
    switch (parent) {
      case 'personalInformation':
        this.setState((prevState) => {
          return {
            personalInformation: {
              ...prevState.personalInformation,
              [name] : value,
            }
          }
        });
        break;
      case 'websites':
        this.setState((prevState) => {
          const websitesCopy = prevState.personalInformation.websites.slice();
          websitesCopy[index][name] = value;
          return {
            personalInformation: {
              ...prevState.personalInformation,
              websites: websitesCopy,
            }
          }
        });
        break;
      default:
        break;
    }
  }

  handleAdd = (e) => {
    const { parent } = e.target.dataset;
    switch (parent) {
      case 'websites':
        this.setState((prevState) => {
          const websitesCopy = prevState.personalInformation.websites.slice();
          websitesCopy.push({
            websiteName: '',
            websiteLink: '',
          });
          return {
            personalInformation: {
              ...prevState.personalInformation,
              websites: websitesCopy,
            }
          }
        });
        break;
      default:
        break;
    }
  }

  handleDelete = (e) => {
    const { parent, index } = e.target.dataset;
    console.log({parent, index})
    switch (parent) {
      case 'websites':
        this.setState((prevState) => {
          const websitesCopy = prevState.personalInformation.websites.filter((website, websiteIndex) => websiteIndex != index);
          return {
            personalInformation: {
              ...prevState.personalInformation,
              websites: websitesCopy,
            }
          }
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <CVInput 
          data={this.state} 
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
        />
        <CVDisplay data={this.state}/>
      </div>
    );
  }
}

export default App;
