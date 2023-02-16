import { useRef } from 'react';
import '../App.css';
import NavBarCustom from '../Components/navbar';
import StickyIcons from '../Components/stickyIcons';
import { Container, Header } from 'semantic-ui-react';
import Footer from '../Components/footer';
import Contact from '../Components/Contact';
import '../scss/App.scss'
import Title from '../Project Page Components/TitleComponent';
import FirstSection from '../Project Page Components/FIrstSection';
import ListItemsCodeBlocks from '../Components/ProjectPageListImage';
import ListItems from '../Components/ProjectPageList';
import ztmImg from "../Resources/ZtmScr.png";

function FirstProjectPage(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  
  let functionality = [
    {
      title:"Autocomplete Text box",
      desc:"After calling the data from my .NET API, the data is loaded into an autocompleting text box, which is very useful and makes picking desired bus stop easier. ",
    },
    {
      title:"Auto odświerzanie",
      desc:"The data provided by the city of Gdansk is constantly refreshed (according to the documentation, every 10 seconds), so the data on the website is also refreshed every 10 seconds by calling the new data from the API",
    },
    {
      title:"Upcoming features",
      desc:"In the near future, features such as account creation, saving favorite stops, and displaying bus routes will be implemented. The project is currently in progress.",
    }
  ]
  let codeSnippets = [
    {
      title:"Deleting rows not between",
      desc:"Below snippet is the interface for bus information that is needed to be displayed on the homepage, such as the bus number, head sign, seconds of delay, and for easier processing, data formatted for display.",
      code:`export default interface busInfo{
        busNumber:string,
        headSign:string,
        delaySeconds:number,
        displayedTime:string,
    }`,
    },
    {
      title:"Mapowanie oraz wyświetlanie pełnej listy autobusów",
      desc:"StopsList function takes an array of data for individual bus stops as a parameter, and if the array is not empty, the function returns a list of stops in the configuration: description - stop ID.",
      code:`export default function StopsList(props: { Stops: DaneStopow[] }) {
        if (props.Stops[0] != undefined) {
      
          const listItems = props.Stops.map((text) => (
            <li>{text.stopDesc} - {text.stopId} </li>
            ));
            
          return (
            <ul>
              {listItems}
            </ul>
          )}
      
        else {
          return (
            <></>
          )
        }
      }`,
    },
    {
      title:"Pobieranie oraz manipulowanie danych",
      desc:"Retrieving information about bus departures from a specific stop specified as stopID from my API and mapping them to an array of departures, which is later displayed.",
      code:`function getDepartures({setDepartures}:any,stopId:string) {
        axios({
          method: 'get',
          url: 'http://localhost:5045/departures/GetDepartures?id='+stopId,
        })
          .then(function (response) {
           setDepartures(mapDepartures(response.data));
          });
      }`,
    }
  ]

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  const FirstProjectTitleText = {
    title:"Public Transportation App",
    subTitle:"Valueable addition to my skill set",
    descreiption: 'I have decided to <a id="highlight">improve my daily commute</a> to work by building a public transportation portal. On the portal, one can select a stop and monitor the current status of our vehicle to avoid unnecessary waiting at the stop. Additionally, there is the option to add a custom route and thoroughly analyze available stops.',
    tech:"Automatyzacja",
    learned:"Automatyzacja",
    image:ztmImg.toString(),
  }


   const text = {
      fHeader: "Features",
      sHeader: "Code snippets",
      tHeader: "Get in touch with me",
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
          <ListItems Texts={functionality}></ListItems>
        </Container>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.sHeader}</Header>
          <ListItemsCodeBlocks Texts={codeSnippets}></ListItemsCodeBlocks>
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
