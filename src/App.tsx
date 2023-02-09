import React, { useRef } from 'react';
import './App.css';
import PorftolioComponent from './Components/portfolio';
import FirstProject from './Components/first_project';
import SecondProject from './Components/second_project';
import AllProjects from './Components/all_Projects';
import NavBarCustom from './Components/navbar';
import StickyIcons from './Components/stickyIcons';
import { Container, Header } from 'semantic-ui-react';
import Footer from './Components/footer';
import Contact from './Components/Contact';


function App() {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
          <div className="pattern">
      </div>
    <div className='App'>
      <StickyIcons></StickyIcons>
      <NavBarCustom handleClickProjekty={handleClickProjekty}></NavBarCustom>
      <div className="Contents">
        <PorftolioComponent></PorftolioComponent>
        <Container textAlign='left' id="separator">
        <Header className='numbered' as='h1'>Moje najważnieszje projekty</Header>
        </Container>
        <div ref={refProjekty}>
          <FirstProject></FirstProject>
          <SecondProject></SecondProject>
        </div>
        <Container textAlign='left' id="separator">
        <Header className='numbered' as='h1'>Inne projekty warte uwagi</Header>
        </Container>
        <Container>
          <AllProjects></AllProjects>
        </Container>
        <Container textAlign="left" id="separator">
            <Header className='numbered' as='h1'>Skontaktuj się ze mną</Header>
        </Container>
        <Container>
        <Contact></Contact>
        </Container>
        <Container>
        <Footer></Footer>
        </Container>
      </div>
    </div>
    </div>

  );
}

export default App;
