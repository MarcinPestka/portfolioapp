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
import codeSnippet1 from "../Resources/data_analysis/codeSnippet1.png"
import codeSnippet2 from "../Resources/data_analysis/codeSnippet2.png"
import codeSnippet3 from "../Resources/data_analysis/codeSnippet3.png"
import analysisScr from "../Resources/data_analysis/analysisToolScr.png";

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
      title:"Deleting rows not between",
      desc:"Wysyłając maile z przypomnieniami chcemy wysłać je do klientów których ubezpieczenie kończy się w danym okresie (wybieranym przez użytkownika). Ta funkcja usuwa wszystkie wiersze tabeli danych zawierające dane zaczytane z pliku excel i zwraca tabelę tylko z tymi wierszami które nas interesują",
      img:codeSnippet1.toString(),
    },
    {
      title:"Towrzenie poszczególnych maili",
      desc:"Po skompilowaniu listy klientów do których należy wysłać maila, wywołujemy szereg funkcji tworzące kopie robocze maili na skrzynce. Na powyższym fragmencie kodu widać jak przebiega proces towrzenia takiego maila.",
      img:codeSnippet2.toString(),
    },
    {
      title:"Tworzenie tabeli poszczególnych dni",
      desc:"Na tym fragmencie widać jak tworzymy tabelę znajdującą się na generowanym przez system raporcie sprzedaży (zobacz przykładowy raport). Tworzenie tabel w bibliotece IText 7 jest dosyć słabo skonstruowane także kod może wydawać się niejasny - aktualnie szukam lepszego rozwiązania.",
      img:codeSnippet3.toString(),
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
    image:analysisScr.toString(),
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
