import React from "react";
import { Tab, Grid, GridColumn, Image,Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/Zrzut ekranu 2023-02-8 o 17.17.51.png";

const panes = [
    { menuItem: 'Technologie', render: () => <Tab.Pane>Do implementacji narzędzia wykorzystałem WinForms.
         Zalezało mi na szybkości działania oraz bezpieczeństwie danych. </Tab.Pane> },
    { menuItem: 'Wyzwania', render: () => <Tab.Pane>Musiałem sam od zera zająć się analizą procesu, znalezieniem moliwych optymalizacji 
        oraz stale dodawać nowe featury.
    </Tab.Pane> },
    { menuItem: 'Benefity', render: () => <Tab.Pane>Tak jak pisałem wyzej benefity z wdrozenia nardzędzia są oblzymie, a praca dzięki 
        temu idzie znacznie lepiej.</Tab.Pane> },
  ]

export default function FirstProject() {
    return(
        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn centered id="photo_column">
                <Image src={code} size='large' rounded id="test" />
            </GridColumn>
            <GridColumn textAlign="left">
            <Container>
                <Header as='h1' id="pod_tytul">Automatyzacja wystawiania polis</Header>
                <Header as='h3' id="opisMnie">Jeden z najwaniejszych projektów na mojej ściezce rozwoju </Header>
                <p>Cenie sobie ten projekt z prostej przyczyny - odpowiedział on na realne potrzeby moje i zespołu w którym pracowałem.
                    Analiza procesu i wdrozenie dedykowanego narzędzia pozwala oszczędzać 10 godzin tygodniowo.
                    Zapewnia równie elastyczność procesu, i łatwośc wdrozenia nowego pracownika.
                </p>
                <Tab panes={panes} />
                </Container>
            </GridColumn>
        </Grid>
    )
}