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
import ListItems from '../Components/ProjectPageList';
import code2 from "../Resources/placeHolderCode.png";
import ListItemsImages from '../Components/ProjectPageListImage';

function FirstProjectPage(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  let obstacles = [
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
  let functionality = [
    {
      title:"Generowanie maili do przypomnień",
      desc:"Management of around 100/200 insurance policies per week is a major challenge even for well-organized insurance agency. With my proprietary tool, the problems practically disappear, and lets us save a lot of time not only during sending of the remainders itself, but also during the subsequent policy issuance process (see more about that)",
      img:code2.toString(),
    },
    {
      title:"Towrzenie list windykacji",
      desc:"Similarly to the previously mentioned list of emails, data from the Excel file is manipulated in such a way that the final file is as user-friendly as possible. I would also like to integrate the system with an SMS gateway API so that payment reminders can be automatically sent.",
      img:code2.toString(),
    },
    {
      title:"Tworzenie raportów sprzedaży",
      desc:"This is one of the most important modules of the application, as it is used most frequently and saves significantly more time. Manually creating such a report used to take around 20 to 30 minutes, now it takes about 10 to 15 seconds. The generator is an indispensable tool - here's an example of a generated sales report.",
      img:code2.toString(),
    }
  ]

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  const FirstProjectTitleText = {
    title:"Data analysis automation tool",
    subTitle:"The project was completed for the purpose of daily data analysis tasks",
    descreiption:"The project was designed to meet the daily needs of data analysis. Similarly to the insurance policy issuance application, it is widely used in a large insurance agency, this project ensures continuous operation and reliable analysis of sales results, as well as accurate creation of reminder email lists. Like with the policy issuance tool, my employer is extremely satisfied with the flexibility and speed of the introduced solution.",
    tech:"Automatyzacja",
    learned:"Automatyzacja",
  }

  const text = {
    fHeader: "Functionality",
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
          <ListItemsImages Texts={functionality}></ListItemsImages>
          <Container textAlign='center' id="githubHeader">
          </Container>
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
