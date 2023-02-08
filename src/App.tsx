import React, { useRef } from 'react';
import './App.css';
import PorftolioComponent from './Components/portfolio';
import FirstProject from './Components/first_project';
import SecondProject from './Components/second_project';
import AllProjects from './Components/all_Projects';
import NavBarCustom from './Components/navbar';
import StickyIcons from './Components/stickyIcons';
import { Container, Header } from 'semantic-ui-react';


function App() {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='App'>
    <div className="pattern">
    </div>

<StickyIcons></StickyIcons>
<NavBarCustom handleClickProjekty={handleClickProjekty}></NavBarCustom>
<div className="Contents">
<PorftolioComponent></PorftolioComponent>
<Container textAlign='left'>
<Header className='numbered' as='h1'>Moje niektóre projekty</Header>
</Container>
<div ref={refProjekty}>
<FirstProject></FirstProject>
<SecondProject></SecondProject>
</div>
<Header className='numbered' as='h1'>Moje wszystkie projekty</Header>
<Container>
<AllProjects></AllProjects>
</Container>
</div>
    </div>
  );
}

export default App;
