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
import ListItemsCodeBlocks from '../Components/ProjectPageListImage';
import analysisScr from "../Resources/data_analysis/analysisToolScr.png";

function FirstProjectPage(Language:any) {
  const refProjekty = useRef<null | HTMLDivElement>(null);

  let obstacles = [
    {
      title:"Generating mailing lists",
      desc:"Management of around <a id='highlight'>100/200 insurance policies</a> per week is a major challenge even for well-organized insurance agency. With my proprietary tool, the problems practically disappear, and lets us <a id='highlight'>save a lot of time</a> not only during sending of the remainders itself, but also during the subsequent policy issuance process <a href='/en/policyAutomation' id='highlightLink'>(see more about that).</a>",
    },
    {
      title:"Generating vindication lists",
      desc:"Similarly to the previously mentioned list of emails, data from the Excel file is manipulated in such a way that the final file is <a id='highlight'>as user-friendly as possible.<a/> I would also like to integrate the system with an <a id='highlight'>SMS gateway API<a/> so that payment reminders can be automatically sent.",
    },
    {
      title:"Sales report generator",
      desc:"This is one of the most important modules of the application, as it is used most frequently and saves significantly more time. Manually creating such a report used to take around <a id='highlight'>20 to 30 minutes, now it takes about 10 to 15 seconds.<a/> The generator is an indispensable tool - here's an example of a generated sales report.",
    }
  ]
  let codeSnippets = [
    {
      title:"Deleting rows not between",
      desc:"When sending reminder emails, we want to send them to customers whose insurance is <a id='highlight'>ending within a specific period</a> (selected by the user). This function <a id='highlight'>deletes all rows</a> in the data table that contain data read from an Excel file and returns the table only with the rows that interest us.",
      code:`public DataTable deleteRowsBetweenDates(DataTable table, DateTime start, DateTime end)
      {
          DataRow[] rows = table.Select("Column56 >= #"+start.ToString("MM/dd/yyyy")+"# AND Column56 <= #"+end.ToString("MM/dd/yyyy 23:59") +"#");
          return rows.CopyToDataTable();
      }`,
    },
    {
      title:"Deleting policies that are already issued",
      desc:"We dont want to send reminders about ending policies to customers that already renewed them, so I had to implement a function that deletes undesired records from the data table. Using <a id='highlight'>LINQ</a> made making this function so much easier and is a valuable tool in my constantly growind skillset.",
      code:`public DataTable uniqueValues(DataTable oldPolicyTable, DataTable newPolicyTable)
      {
          var rowsToDelete = from r1 in oldPolicyTable.AsEnumerable()
                             join r2 in newPolicyTable.AsEnumerable()
                                  on r1.Field<String>("Column29") equals r2.Field<String>("Column29")
                             select r1;

          foreach (DataRow row in rowsToDelete.ToArray())
              row.Delete();

          oldPolicyTable.AcceptChanges();

          return oldPolicyTable;
      }`,
    },
    {
      title:"Towrzenie poszczególnych maili",
      desc:"After compiling a list of customers to whom an email should be sent, we run a series of functions that <a id='highlight'>create draft copies of the emails in the mailbox.<a/> The code fragment below shows how the process of creating such an email proceeds.",
      code:`public void CreateMailItems(List<policyData> policyList)
      {
          Outlook.Application outlookApp = new Outlook.Application();

          //For each policy in list create mail item
          foreach (var item in policyList)
          {
              // Mappin data to object
              mailItemData data = mailItemData.CreateMailItemData(item);

              //Creating new mailItem
              Outlook.MailItem mailItem = (Outlook.MailItem)
              outlookApp.CreateItem(Outlook.OlItemType.olMailItem);
              createMailItem(mailItem, data);

              //Saving item as a draft
              mailItem.Save();
          }
      }

private void createMailItem(Outlook.MailItem mailItem, mailItemData data )
      {
          mailItem.Subject = data.Subject;
          mailItem.To = data.mail;
          data.Body = data.Body.Replace("numerPolisy", data.policyNumber);
          data.Body = data.Body.Replace("dataWygasniecia", data.endDate.ToString("dd.MM.yyyy"));
          mailItem.HTMLBody = data.Body.Replace("suma1", data.PolicyType);
      }`,
    },
    {
      title:"Tworzenie tabeli poszczególnych dni",
      desc:"This code fragment shows how we create a table that appears in the sales report generated by the system (see sample report). The process of creating tables in the <a id='highlight'>iText7</a> library is not very well structured, so the code may seem unclear - we are currently looking for a better solution.",
      code:`private Table createDayByDayTable(List<dayToDayData>  list)
      {
          Table dayByDayTable = new Table(7)
              .SetFontSize(8)
              .SetWidth(UnitValue.CreatePercentValue(80))
              .SetHorizontalAlignment(iText.Layout.Properties.HorizontalAlignment.CENTER)
              .SetMarginTop(50);
    
          foreach (string cellHeader in headerList)
          {
              dayByDayTable.AddCell(cellHeader);
          }
          
          foreach (var daySalesData in list)
          {
              addDataCells(dayByDayTable, daySalesData);
          }
    
          return dayByDayTable;
      }
      `,
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
          <Title {...FirstProjectTitleText} ></Title>
          <FirstSection {...FirstProjectTitleText}></FirstSection>
        </div>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.fHeader}</Header>
          <ListItems Texts={obstacles}></ListItems>
        </Container>
        <Container textAlign="left" id="separator">
          <Header className='numbered' as='h1'>{text.sHeader}</Header>
          <ListItemsCodeBlocks Texts={codeSnippets}></ListItemsCodeBlocks>
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
