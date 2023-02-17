import { useEffect } from 'react';
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
import '../scss/App.scss'
import MySkills from '../Components/mySkills';
import ztmImg from "../Resources/ZtmScr.png";
import pAutomation from "../Resources/policy_automation/policyAutomation.png";
import analysisScr from "../Resources/data_analysis/analysisToolScr.png";
import { useLocation } from 'react-router-dom';


function App(Language:any) {
  const location = useLocation();
  useEffect(()=> {
    setTimeout(() => {
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
    }, 500)
}, [location,])

  let firstProjectText = { 
      title:"Policy Issuing Automation",
      subTitle:"One of the most important projects in my portfolio",
      descreiption:'I value this project for its practical application in <a id="highlight">addressing the needs of my team.</a> The analysis of our processes and implementation of a dedicated tool allows us to save <a id="highlight">10 hours a week</a>. Additionally, the project provides flexibility in our processes and facilitates the easy onboarding of new employees.',
      image:(pAutomation).toString(),
      url:"/en/policyAutomation",
  }

  let secondProjectText = { 
    title:"Data analysis automation tool",
    subTitle:"My first commercial project",
    descreiption:'This project holds a special place in my heart because it showcased the power of <a id="highlight">effective implementation</a>. The thorough analysis of my daily tasks and development of a tool that performs them for me has ignited a <a id="highlight">passion within me for programming</a> and producing high-quality code.',
    image:(analysisScr).toString(),
    url:"/en/dataanalysis",
  }
  let thirdProjectText = { 
    title:"Public Transportation App",
    subTitle:"Valueable addition to my skill set",
    descreiption:'I have decided to <a id="highlight">improve my daily commute</a> to work by building a public transportation portal. On the portal, one can select a stop and monitor the current status of our vehicle to avoid unnecessary waiting at the stop. Additionally, there is the option to add a custom route and thoroughly analyze available stops.',
    image:(ztmImg).toString(),
    url:"/en/ztmapp",
  }
  const text = {
    fHeader: "My biggest projects",
    sHeader: "More about my skills",
    tHeader: "Other noteworthy projects",
    frthHeader: "Get in touch with me",
  }

  return (
    <div>
      <div className="pattern">
      </div>
      <div className='App'>
        <div className="stickyIcons">
        <StickyIcons></StickyIcons>
        </div>
        <NavBarCustom></NavBarCustom>
        <div className="Contents">
          <PorftolioComponent language={Language.language}></PorftolioComponent>
          <div id="projects">
          <Container textAlign='left' id="separator">
            <Header className='numbered' as='h1' id="projectsHeader">{text.fHeader}</Header>
          </Container>
            <LeftSideProject {...firstProjectText}></LeftSideProject>
            <RightSideProject {...secondProjectText}></RightSideProject>
            <LeftSideProject {...thirdProjectText}></LeftSideProject>
          </div>
          <Container textAlign='left' id="separator">
            <div id="exp">
            <Header className='numbered' as='h1'>{text.sHeader}</Header>
            <MySkills></MySkills>
            </div>
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
          <div id="contact">
          <Container>
            <Contact></Contact>
          </Container>
          </div>
          <Container>
            <Footer></Footer>
          </Container>
        </div>
      </div>
    </div>

  );
}

export default App;
