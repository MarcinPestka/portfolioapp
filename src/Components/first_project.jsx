import React from "react";
import { Tab, Grid, GridColumn, Image,Header, Container, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/placeHolderCode.png";

const panes = [
    { menuItem: {icon: 'file code', content: 'Technologie' }, render: () => <Tab.Pane>Do implementacji narzędzia wykorzystałem WinForms.
         Zalezało mi na szybkości działania oraz bezpieczeństwie danych. </Tab.Pane> },
    { menuItem: {icon: 'lock', content: 'Wyzwania' }, render: () => <Tab.Pane>Musiałem sam od zera zająć się analizą procesu, znalezieniem moliwych optymalizacji 
        oraz stale dodawać nowe 
    </Tab.Pane> },
    { menuItem: {icon: 'dollar', content: 'Benefity' }, render: () => <Tab.Pane>Tak jak pisałem wyzej benefity z wdrozenia nardzędzia są oblzymie, a praca dzięki 
        temu idzie znacznie lepiej.</Tab.Pane> },
  ]

export default function FirstProject() {
    return(
        <div className="projectSection">
        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn centered>
                <Image src={code} size='large' rounded id="test" />
            </GridColumn>
            <GridColumn textAlign="left">
            <Container>
                <Header as='h1' id="pod_tytul">Automatyzacja wystawiania polis</Header>
                <Header as='h3' id="podTytulProjektu">Jeden z najwaniejszych projektów na mojej ściezce rozwoju </Header>
                <p id="opisMnie">Cenie sobie ten projekt z prostej przyczyny - odpowiedział on na realne potrzeby moje i zespołu w którym pracowałem.
                    Analiza procesu i wdrozenie dedykowanego narzędzia pozwala oszczędzać 10 godzin tygodniowo.
                    Zapewnia równie elastyczność procesu, i łatwośc wdrozenia nowego pracownika.
                </p>
                <Tab panes={panes} id="testDisplay"/>
                </Container>
            </GridColumn>
        </Grid>
        </div>
    )
}