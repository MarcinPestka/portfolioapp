import React, { useRef } from 'react';
import './App.css';
import PorftolioComponent from './Components/portfolio';
import FirstProject from './Components/first_project';
import SecondProject from './Components/second_project';
import AllProjects from './Components/all_Projects';
import NavBarCustom from './Components/navbar';
import StickyIcons from './Components/stickyIcons';


function App() {
  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    console.log("test");
  }

  return (
    <div className="App">
      <StickyIcons></StickyIcons>
      <NavBarCustom handleClick={handleClick}></NavBarCustom>
      <div className="Contents">
      <PorftolioComponent></PorftolioComponent>
      <FirstProject></FirstProject>
      <div ref={ref}>
      <SecondProject></SecondProject>
      </div>
      <AllProjects></AllProjects>
      </div>
    </div>
  );
}

export default App;
