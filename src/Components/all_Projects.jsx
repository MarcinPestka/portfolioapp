import React from "react";
import { Card, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

  const itemsEN = [
    {
      header: 'Policy Issuing Tool',
      description:
        'My biggest commercial success, which serves daily in the operations of a large insurance agency.',
    },
    {
      header: 'Gdansk public transport site',
      description:
        'A project that greatly benefits my daily personal life, I cannot imagine living without it.',
    },
    {
      header: 'Pdf Generation Tool',
      description:
        'This is a project that taught me a lot about file creation and writing reliable code - generated files are sent to clients.',
    },
    {
      header: 'Book title copying nad formating',
      description:
        "This project was undertaken out of curiosity to explore the ease of writing a Chrome extension, resulting in a simple yet beneficial tool for writing my bachelor's thesis.",
    },
    {
      header: 'UI/UX policy handling site',
      description:
        "This project was created for the purpose of writing a bachelor's thesis and through it, I learned many useful aspects of UX/UI.",
    },
    {
      header: 'Portfolio page',
      description:
        "Creating this website allowed me to enhance my UI/UX, Typescript, and React skills. I can confidently say I'm a Full-Stack developer.",
    },
  ]
  const listItems = itemsEN.map((text) =>(
    <Card href="https://linkedin.com" target='_blank'>
      <Card.Content header={text.header} />
      <Card.Content description={text.description} />
    </Card>
  )
  );
export default function AllProjects() {


  return(
    <div>
      <Card.Group centered>
        {listItems}
      </Card.Group>
    </div>
  )
  
}