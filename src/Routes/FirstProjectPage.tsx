import { useRef } from 'react';
import '../App.css';
import NavBarCustom from '../Components/navbar';
import StickyIcons from '../Components/stickyIcons';
import { Container, Header, Image } from 'semantic-ui-react';
import Footer from '../Components/footer';
import Contact from '../Components/Contact';
import '../scss/App.scss'
import Title from '../Project Page Components/TitleComponent';
import FirstSection from '../Project Page Components/FIrstSection';
import parse from 'html-react-parser'
import diagram from '../Resources/policyAutomationDiagram.png'

function FirstProjectPage(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const handleClickProjekty = () => {
    refProjekty.current?.scrollIntoView({ behavior: 'smooth' });
  }

  interface texts{
    title:string,
    desc:string,
  }

  let obstacles = [
    {
      title:"Brak Api systemu wystawiania polis",
      desc:"The biggest challenge that I overcame was the lack of integration of the insurance policy issuance system, using API it would be much easier to build the system. Without API, data retrieval relies on exporting data to an .xslx file and loading it into a data table in the application's memory.",
    },
    {
      title:"Skomplikowana logika biznesowa",
      desc:"Another challenge was the complicated process of issuing policy renewals. For example, the insurance period must not overlap. I had to spend a lot of time on data validation and connecting to the address database to ensure that the data being transmitted is correct.",
    },
    {
      title:"User expirience jako priorytet",
      desc:"The next challenge I took very seriously as a goal was to build a tool with a focus on user experience. So that a new employee could be integrated in the shortest possible time. The process was previously much more complicated, now it is so simple that even an inexperienced employee works very efficiently. And can learn about the process from my simple documentation",
    }
  ]
  let techDesc = [
    {
      title:"C#",
      desc:"Feeling very comfortable writing in C# is why I made the decision to use this technology. I can confidently say that I do not regret my decision, as this choice has brought me many benefits and taught me a lot. Additionally, working with C# has allowed me to further develop my skills and broaden my knowledge in programming. The versatility and simplicity of this language have made it a great choice for a variety of projects. Furthermore, the community and resources available for C# are extensive, providing a wealth of information and support. Overall, I am extremely satisfied with my decision to use C# and look forward to continuing to work with this language in the future.",
    },
    {
      title:"WinForms",
      desc:"ZMy decision to choose WinForms technology was based on the need to create a clear and user-friendly interface. The simple interface creation rules allowed me to save time and quickly implement the tool, which was a priority in my project. The knowledge and experience gained while using WinForms was invaluable, as it allowed me to better understand and more effectively utilize this technology in future projects.",
    },
    {
      title:"Nuget Packages",
      desc:"I love .Net for its big community and many available packages that make life of a developer much easier, I opted to use a couple of NugetPackages, such as: "+
      "<a id='highlight'>ITextSharp</a> - lightweight package for handling pdfs - I used it for parsing and encrypting, "+
      "<a id='highlight'>ClosedXML & ExcelDataReader</a> - simple packages for reading excel files and creating them from data structures, "+
      "<a id='highlight'>Microsoft.Interop.Outlook</a> - used for creating draft mail items, I plan to change it for graph API.",
    }
  ]
  let howItWorks = [
    {
      title:"1. We send an email reminder about the expiring insurance policy",
      desc:"In the email, data such as the expiration date, premium amount, and policy number are automatically inserted. (Read more about the reminder mailing system).",
    },
    {
      title:"2. Customer returns the request for renewal.",
      desc:"When enough emails from customers wishing to continue their policy accumulate in the inbox, we start the process of issuing the policies.",
    },
    {
      title:"3. Manipulate data in the tool",
      desc:"As previously mentioned, we do not have the possibility to connect to the API of the insurance policy issuance system, which we unfortunately have to use. Below is a diagram describing the process of creating a list of policies for renewal. The tool could automatically read policy numbers from the inbox, however, some clients request changes to the coverage or personal information.",
    },
  ]

  function ListItems(props:{Texts:texts[]}) {
    const list = props.Texts.map((text) =>(
      <>
      <h3 id="podTytulProjektu">{text.title}</h3>
      <p id="opisMnie">{parse(text.desc)}</p>
      </>
    ))
    return(
      <>
      {list}
      </>
    )
  }

  const FirstProjectTitleText = {
    title:"Policy Issuing Automation",
    subTitle:"App that saves 10 houes a week",
    descreiption:'I value this project for its practical application in <a id="highlight">addressing the needs of my team.</a> The analysis of our processes and implementation of a dedicated tool allows us to save <a id="highlight">10 hours a week</a>. Additionally, the project provides flexibility in our processes and facilitates the easy onboarding of new employees.',
    tech:"Automatyzacja",
    learned:"Automatyzacja",
  }

  let text = {
    fHeader: "Obstacles",
    sHeader: "Tehnology used",
    tHeader: "How it works",
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
      <NavBarCustom handleClickProjekty={handleClickProjekty} handleClickExpirience={""} handleClickContact={""} language={Language.language}></NavBarCustom>
      <div className="Contents">
        <div ref={refProjekty}>
          <Title {...FirstProjectTitleText}></Title>
          <FirstSection {...FirstProjectTitleText}></FirstSection>
        </div>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.fHeader}</Header>
          <ListItems Texts={obstacles}></ListItems>
        </Container>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.sHeader}</Header>
          <ListItems Texts={techDesc}></ListItems>
        </Container>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.tHeader}</Header>
          <ListItems Texts={howItWorks}></ListItems>
          <Image src={diagram} size='big' rounded id="test" centered />
          <Container textAlign='center' id="githubHeader">
          <Header as='h1'>Unfortunately, I cannot provide the link to Github, however, I would be more than happy to present and share more about the work during an interview. 😉 </Header>
          </Container>
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

export default FirstProjectPage;
