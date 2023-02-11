import React, { useRef } from 'react';
import '../App.css';
import PorftolioComponent from '../Components/portfolio';
import LeftSideProject from '../Components/LeftSideProject';
import RightSideProject from '../Components/RightSideProject';
import AllProjects from '../Components/all_Projects';
import NavBarCustom from '../Components/navbar';
import StickyIcons from '../Components/stickyIcons';
import { Container, Header } from 'semantic-ui-react';
import Footer from '../Components/footer';
import Contact from '../Components/Contact';
import Toggle from '../Components/toggle';
import '../scss/App.scss'
import MySkills from '../Components/mySkills';
import code from "../Resources/ztm.png";
import code2 from "../Resources/placeHolderCode.png";


function App(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  let firstProjectText = { 
      title:"Policy automation",
      subTitle:"One of the most important projects in my portfolio",
      descreiption:"I value this project for its practical application in addressing the needs of my team. The analysis of our processes and implementation of a dedicated tool allows us to save 10 hours a week. Additionally, the project provides flexibility in our processes and facilitates the easy onboarding of new employees.",
      image:(code).toString(),
  }
  let secondProjectText = { 
    title:"Data analysis",
    subTitle:"Valueable addition to my skill set",
    descreiption:"I value this project for its practical application in addressing the needs of my team. The analysis of our processes and implementation of a dedicated tool allows us to save 10 hours a week. Additionally, the project provides flexibility in our processes and facilitates the easy onboarding of new employees.",
    image:(code2).toString(),
  }
  let thirdProjectText = { 
    title:"Data analysis",
    subTitle:"Valueable addition to my skill set",
    descreiption:"I value this project for its practical application in addressing the needs of my team. The analysis of our processes and implementation of a dedicated tool allows us to save 10 hours a week. Additionally, the project provides flexibility in our processes and facilitates the easy onboarding of new employees.",
    image:(code).toString(),
  }
  let text = {
    fHeader: "Moje najważniejsze projekty",
    sHeader: "Wiecęj o moich umiejętnościach",
    tHeader: "Inne projekty warte uwagi",
    frthHeader: "Skontaktyuj się ze mną",
  }

  if(Language.language == "en"){
    text = {
      fHeader: "My biggest projects",
      sHeader: "More about my skills",
      tHeader: "Other noteworthy projects",
      frthHeader: "Get in touch with me",
    }
  }

  return (
    <div>
      <div className="pattern">
      </div>
      <div className='App'>
        <div className="stickyIcons">
        <StickyIcons></StickyIcons>
        </div>
        <NavBarCustom handleClickProjekty={handleClickProjekty} language={Language.language}></NavBarCustom>
        <div className="Contents">
          <PorftolioComponent language={Language.language}></PorftolioComponent>
          <Container textAlign='left' id="separator">
            <Header className='numbered' as='h1'>{text.fHeader}</Header>
          </Container>
          <div ref={refProjekty}>
            <LeftSideProject {...firstProjectText}></LeftSideProject>
            <RightSideProject {...secondProjectText}></RightSideProject>
            <LeftSideProject {...thirdProjectText}></LeftSideProject>
          </div>
          <Container textAlign='left' id="separator">
            <Header className='numbered' as='h1'>{text.sHeader}</Header>
            <MySkills></MySkills>
          </Container>
          <Container textAlign='left' id="separator">
            <Header className='numbered' as='h1'>{text.tHeader}</Header>
          </Container>
          <Container className="allProjects">
            <AllProjects></AllProjects>
          </Container>
          <Container textAlign="left" id="separator">
            <Header className='numbered' as='h1'>{text.frthHeader}</Header>
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
