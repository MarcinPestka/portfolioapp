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
import Title from '../Project Page Components/TitleComponent';
import FirstSection from '../Project Page Components/FIrstSection';

function FirstProjectPage(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  const FirstProjectTitleText = {
    title:"Automatyzacja wystawiania polis",
    subTitle:"Projekt który pozwala oszczędzać 10 godzin tygodniowo",
    descreiption:"Cenię ten projekt ze względu na jego praktyczne zastosowanie w odpowiedzi na potrzeby mojego zespołu. Analiza naszych procesów i wdrożenie dedykowanego narzędzia pozwala nam na oszczędność czasu w wysokości 10 godzin tygodniowo. Dodatkowo, projekt zapewnia elastyczność naszych procesów oraz umożliwia łatwe wdrożenie nowych pracowników.",
    tech:"Automatyzacja",
    learned:"Automatyzacja",
  }

  let text = {
    fHeader: "Zastosowane technologie",
    sHeader: "Czego się nauczyłem",
    tHeader: "Skontaktyuj się ze mną",
  }

  if(Language.language == "en"){
    text = {
      fHeader: "My biggest projects",
      sHeader: "More about my skills",
      tHeader: "Other noteworthy projects",
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
        <div ref={refProjekty}>
          <Title {...FirstProjectTitleText}></Title>
          <FirstSection {...FirstProjectTitleText}></FirstSection>
        </div>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.fHeader}</Header>
        </Container>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.sHeader}</Header>
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

export default FirstProjectPage;
