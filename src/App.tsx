import React from 'react';
import logo from './logo.svg';
import './App.css';
import PorftolioComponent from './Components/portfolio';
import FirstProject from './Components/first_project';
import SecondProject from './Components/second_project';
import allProjects from './Components/all_Projects';
import AllProjects from './Components/all_Projects';

function App() {
  return (
    <div className="App">
      <a href="www.youtube.com">
        <button>Posts</button>
      </a>
      <PorftolioComponent></PorftolioComponent>
      <FirstProject></FirstProject>
      <SecondProject></SecondProject>
      <AllProjects></AllProjects>
    </div>
  );
}

export default App;
