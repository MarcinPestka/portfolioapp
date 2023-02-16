import { Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

  const itemsEN = [
    {
      header: 'Portfolio page',
      link:"https://github.com/MarcinPestka/portfolioapp",
      target:"_blank",
      description:
        "Creating this website allowed me to enhance my UI/UX, Typescript, and React skills. I can confidently say I'm a Full-Stack developer.",
    },
    {
      header: 'Chat Gpt copy button',
      link:"https://github.com/MarcinPestka/chatGPT-chrome-extension",
      target:"_blank",
      description:
        "This project was undertaken out of curiosity to explore the ease of writing a Chrome extension, resulting in a simple yet beneficial tool for writing my bachelor's thesis.",
    },
    {
      header: 'Book title copying nad formating',
      link:"https://github.com/MarcinPestka/Library-site-chrome-extension",
      target:"_blank",
      description:
        "This project was undertaken out of curiosity to explore the ease of writing a Chrome extension, resulting in a simple yet beneficial tool for writing my bachelor's thesis.",
    }
  ]
  const listItems = itemsEN.map((text) =>(
    <Card href={text.link} target={text.target}>
      <Card.Content header={text.header} />
      <Card.Content description={text.description} />
    </Card>
  )
  );
export default function AllProjects() {


  return(
    <div>
      <Card.Group centered id="AllProjectsCardsGroup">
        {listItems}
      </Card.Group>
    </div>
  )
  
}