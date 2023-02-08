import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import PorftolioComponent from './Components/portfolio';
import FirstProject from './Components/first_project';
import SecondProject from './Components/second_project';
import allProjects from './Components/all_Projects';
import AllProjects from './Components/all_Projects';
import NavBarCustom from './Components/navbar';


function App() {
  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    console.log("test");
  }

  return (
    <div className="App">
      <NavBarCustom handleClick={handleClick}></NavBarCustom>
      <PorftolioComponent></PorftolioComponent>
      <FirstProject></FirstProject>
      <div ref={ref}>
      <SecondProject></SecondProject>
      </div>
      <AllProjects></AllProjects>
    </div>
  );
}

export default App;
