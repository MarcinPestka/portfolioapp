import React from "react";
import { Card, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

let items = []
const itemsPL = [
    {
      header: 'Automatyzacja wystawiania polis',
      description:
        'Mój największy komercyjny sukces, który codziennie słuzy w działaniu agencji ubezpieczeniowej.',
    },
    {
      header: 'Portal komunikacji miejskiej',
      description:
        'Projekt który najbardziej usprawnił moje zycie codzienne.',
    },
    {
      header: 'Automatyczna generacja pdf',
      description:
        'Jest to projekt dzięki któremu bardzo duzo nauczylem się o tworzeniu plików.',
    },
    {
      header: 'Kopiowanie tytułów ksiązek',
      description:
        'Projekt wykonany dla zabawy który przynosi bardzo duzo pozytku przy pisaniu pracy licencjackiej.',
    },
    {
      header: 'Projekt UX portalu obsługi polis',
      description:
        'Projekt wykonany na potrzeby pisania pracy licencjackiej, dzięki niemu dowiedzialem się wielu przydatnych zagadnień z dziedziny UX/UI.',
    },
  ]
  const itemsEN = [
    {
      header: 'Policy Automation',
      description:
        'Mój największy komercyjny sukces, który codziennie słuzy w działaniu agencji ubezpieczeniowej.',
    },
    {
      header: 'Gdansk public transport site',
      description:
        'Projekt który najbardziej usprawnił moje zycie codzienne.',
    },
    {
      header: 'Pdf generation automation',
      description:
        'Jest to projekt dzięki któremu bardzo duzo nauczylem się o tworzeniu plików.',
    },
    {
      header: 'Book title copying nad formating',
      description:
        'Projekt wykonany dla zabawy który przynosi bardzo duzo pozytku przy pisaniu pracy licencjackiej.',
    },
    {
      header: 'UI/UX projekt for policy handling site',
      description:
        'Projekt wykonany na potrzeby pisania pracy licencjackiej, dzięki niemu dowiedzialem się wielu przydatnych zagadnień z dziedziny UX/UI.',
    },
  ]

export default function AllProjects() {

  if(window.location.href.slice(-2) == "en"){
    items = itemsEN;
  }
  else{
    items = itemsPL;
  }

  return(
    <div>
      <Card.Group centered>
        <Card href="https://linkedin.com" target='_blank'>
          <Card.Content header={items[0].header} />
          <Card.Content description={items[0].description} />
        </Card>
        <Card href="https://linkedin.com" target='_blank'>
          <Card.Content header={items[1].header} />
          <Card.Content description={items[1].description} />
        </Card>
        <Card href="https://linkedin.com" target='_blank'>
          <Card.Content header={items[2].header} />
          <Card.Content description={items[2].description} />
        </Card>
        <Card href="https://linkedin.com" target='_blank'>
          <Card.Content header={items[3].header} />
          <Card.Content description={items[3].description} />
        </Card>
        <Card href="https://linkedin.com" target='_blank'>
          <Card.Content header={items[4].header} />
          <Card.Content description={items[4].description} />
        </Card>
      </Card.Group>
    </div>
  )
  
}