import React, { Component } from 'react';
import './styles/App.css';
import CVInput from './components/CVInput';
import CVDisplay from './components/CVDisplay';

class App extends React.Component {
  constructor() {
    super(props);
    this.exampleData = {
      personalInformation: {
        firstName: 'Bob',
        lastName: 'the Builder',
        title: 'Construction Worker',
        description: 'Can we fix it? Yes, we can!',
        photo: './img/photo.png',
        location: 'Fixham Harbour',
        phoneNumber: '123-456-7890',
        email: 'bob@icanfixthat.com',
        websites: [{
          websiteName: 'github',
          websiteLink: 'github.com/bobTheBuilder',
        }],
      },
      skills: ['Problem-Solving'],
      education: [{
        university: 'University of Bobsville',
        location: 'Bobsville, United Kingdom',
        degree: 'B.A.',
        subject: 'Construction',
        from: '1997',
        to: 'Present',
      }],
      experience: [{
        position: 'Owner',
        company: `Bob's Yard`,
        location: 'Bobsville',
        from: '1997',
        to: '2007',
        description: 'Built and maintained the yard with my father, Robert, and the Can-Do Crew',
      }],
    };
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__header">CV Application</h1>
        <CVInput data={this.exampleData}/>
        <CVDisplay />
      </div>
    );
  }
}

export default App;
