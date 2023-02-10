import React, { useRef } from 'react';
import '../App.css';
import PorftolioComponent from '../Components/portfolio';
import FirstProject from '../Components/first_project';
import SecondProject from '../Components/second_project';
import AllProjects from '../Components/all_Projects';
import NavBarCustom from '../Components/navbar';
import StickyIcons from '../Components/stickyIcons';
import { Container, Header } from 'semantic-ui-react';
import Footer from '../Components/footer';
import Contact from '../Components/Contact';
import Toggle from '../Components/toggle';
import '../scss/App.scss'


function App(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  let text = {
    fHeader: "Moje najważniejsze projekty",
    sHeader: "Inne projekty warte uwagi",
    tHeader: "Skontaktyuj się ze mną",
  }

  if(Language.language == "en"){
    text = {
      fHeader: "My biggest projects",
      sHeader: "Other noteworthy projects",
      tHeader: "Get in touch with me",
    }
  }

  return (
    <div>
      <div className="pattern">
      </div>
      <div className='App'>
        <StickyIcons></StickyIcons>
        <NavBarCustom handleClickProjekty={handleClickProjekty} language={Language.language}></NavBarCustom>
        <div className="Contents">
          <PorftolioComponent language={Language.language}></PorftolioComponent>
          <Container textAlign='left' id="separator">
            <Header className='numbered' as='h1'>{text.fHeader}</Header>
          </Container>
          <div ref={refProjekty}>
            <FirstProject language={Language.language}></FirstProject>
            <SecondProject language={Language.language}></SecondProject>
          </div>
          <Container textAlign='left' id="separator">
            <Header className='numbered' as='h1'>{text.sHeader}</Header>
          </Container>
          <Container>
            <AllProjects></AllProjects>
          </Container>
          <Container textAlign="left" id="separator">
            <Header className='numbered' as='h1'>{text.tHeader}</Header>
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
