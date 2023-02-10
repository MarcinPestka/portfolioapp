import React from "react";
import { Tab, Grid, GridColumn, Image,Header, Container, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/placeHolderCode.png";
import { analyze } from "eslint-scope";

let text = {
    title:"Automatyzacja wystawiania polis",
    subTitle:"Jeden z najwaniejszych projektów na mojej ściezce rozwoju",
    description:"Cenię ten projekt ze względu na jego praktyczne zastosowanie w odpowiedzi na potrzeby mojego zespołu. Analiza naszych procesów i wdrożenie dedykowanego narzędzia pozwala nam na oszczędność czasu w wysokości 10 godzin tygodniowo. Dodatkowo, projekt zapewnia elastyczność naszych procesów oraz umożliwia łatwe wdrożenie nowych pracowników.",
    technology:"Do implementacji narzędzia wykorzystałem WinForms. Zalezało mi na szybkości działania oraz bezpieczeństwie danych. ",
    obstacles:"Musiałem sam od zera zająć się analizą procesu, znalezieniem moliwych optymalizacji oraz stale dodawać nowe. ",
    benefits:"Tak jak pisałem wyzej benefity z wdrozenia nardzędzia są oblzymie, a praca dzięki temu idzie znacznie lepiej.. ",
}

export default function FirstProject(language) {
    if(language.language == "en"){
        text = {
            title:"Policy automation",
            subTitle:"One of the most important projects in my portfolio",
            description:"I value this project for its practical application in addressing the needs of my team. The analysis of our processes and implementation of a dedicated tool allows us to save 10 hours a week. Additionally, the project provides flexibility in our processes and facilitates the easy onboarding of new employees.",
            technology:"For implementation i opted for WinForms",
            obstacles:"I had to not only implement the project but also analise the existing porcesses and create brand new ones. ",
            benefits:"Tak jak pisałem wyzej benefity z wdrozenia nardzędzia są oblzymie, a praca dzięki temu idzie znacznie lepiej.. ",
        }
    }

    const panes = [
        { menuItem: {icon: 'file code', content: 'Technologie' }, render: () => <Tab.Pane>{text.technology}</Tab.Pane> },
        { menuItem: {icon: 'lock', content: 'Wyzwania' }, render: () => <Tab.Pane>{text.obstacles}</Tab.Pane> },
        { menuItem: {icon: 'dollar', content: 'Benefity' }, render: () => <Tab.Pane>{text.benefits}</Tab.Pane> },
      ]


    return(
        <div className="projectSection">
        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn centered>
                <Image src={code} size='large' rounded id="test" />
            </GridColumn>
            <GridColumn textAlign="left">
            <Container>
                <Header as='h1' id="pod_tytul">{text.title}</Header>
                <Header as='h3' id="podTytulProjektu">{text.subTitle}</Header>
                <p id="opisMnie">{text.description}</p>
                <Tab panes={panes} id="testDisplay"/>
                </Container>
            </GridColumn>
        </Grid>
        </div>
    )
}