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
  
  let techDesc = [
    {
      title:"WinForms",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor metus vitae ante egestas commodo. In pellentesque sapien non faucibus tincidunt. Donec sit amet molestie quam. Ut suscipit sem nisl, quis interdum dui aliquet vitae. Nullam elementum lectus a diam ultrices sodales eu et quam. Curabitur consequat scelerisque mauris et sollicitudin.",
    },
    {
      title:".Net",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor metus vitae ante egestas commodo. In pellentesque sapien non faucibus tincidunt. Donec sit amet molestie quam. Ut suscipit sem nisl, quis interdum dui aliquet vitae. Nullam elementum lectus a diam ultrices sodales eu et quam. Curabitur consequat scelerisque mauris et sollicitudin.",
    },
    {
      title:"Nuget Packages",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor metus vitae ante egestas commodo. In pellentesque sapien non faucibus tincidunt. Donec sit amet molestie quam. Ut suscipit sem nisl, quis interdum dui aliquet vitae. Nullam elementum lectus a diam ultrices sodales eu et quam. Curabitur consequat scelerisque mauris et sollicitudin.",
    }
  ]
  const listItems = techDesc.map((text) =>(
    <>
    <h3 id="podTytulProjektu">{text.title}</h3>
    <p id="opisMnie">{text.desc}</p>
    </>
  )
  );

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  const FirstProjectTitleText = {
    title:"Portal komunikacji miejskiej",
    subTitle:"Ten projekt znacznie ułatwia moje zycie codzienne",
    descreiption: "Postanowiłem usprawnić moją codzienną drogę do pracy, budowałem portal komunikacji miejskiej. Na portalu można wybrać przystanek i śledzić aktualny stan naszego pojazdu, aby uniknąć niepotrzebnego czekania na przystanku. Ponadto, istnieje możliwość dodania własnej trasy i dokładnej analizy dostępnych przystanków.",
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
      <NavBarCustom handleClickProjekty={handleClickProjekty} handleClickExpirience={""} handleClickContact={""} language={Language.language}></NavBarCustom>
      <div className="Contents">
        <div ref={refProjekty}>
          <Title {...FirstProjectTitleText}></Title>
          <FirstSection {...FirstProjectTitleText}></FirstSection>
        </div>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.fHeader}</Header>
          {listItems}
        </Container>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.sHeader}</Header>
          {listItems}
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
