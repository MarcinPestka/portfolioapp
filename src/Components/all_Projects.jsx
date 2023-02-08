import React from "react";
import { Card, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const items = [
    {
      header: 'Automatyzacja wystawiania polis',
      description:
        'Mój największy komercyjny sukces, który codziennie słuzy w działaniu agencji ubezpieczeniowej.',
      icon: 'github'
    },
    {
      header: 'Portal komunikacji miejskiej',
      description:
        'Projekt który najbardziej usprawnił moje zycie codzienne.',
        meta: <div><Icon name="github"></Icon>Sprawdź</div>,
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

export default function AllProjects() {
    return(
        <div>
          <Card.Group centered>
            <Card href="https://linkedin.com" target='_blank'>
              <Card.Content header='Automatyzacja wystawiania polis' />
              <Card.Content description='Mój największy komercyjny sukces, który codziennie słuzy w działaniu agencji ubezpieczeniowej' />
            </Card>
            <Card href="https://linkedin.com" target='_blank'>
              <Card.Content header='Portal komunikacji miejskiej' />
              <Card.Content description='Projekt który najbardziej usprawnił moje zycie codzienne. Mam kilka pomysłów na usprawnienie które mam nadzieje wdrozyć.' />
            </Card>
            <Card href="https://linkedin.com" target='_blank'>
              <Card.Content header='Automatyczna generacja pdf' />
              <Card.Content description='Jest to projekt dzięki któremu bardzo duzo nauczylem się o tworzeniu plików w pamięci oraz Garbage Collectingu.' />
            </Card>
            <Card href="https://linkedin.com" target='_blank'>
              <Card.Content header='Kopiowanie tytułów ksiązek' />
              <Card.Content description='Projekt wykonany dla zabawy który przynosi bardzo duzo pozytku przy pisaniu pracy licencjackiej.' />
            </Card>
            <Card href="https://linkedin.com" target='_blank'>
              <Card.Content header='Projekt UI portalu obsługi polis' />
              <Card.Content description='Projekt wykonany na potrzeby pracy licencjackiej, dzięki niemu rozwinąłem umiejętności z dziedziny UX/UI.' />
            </Card>
          </Card.Group>
        </div>
    )
}