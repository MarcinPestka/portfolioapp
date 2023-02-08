import React from "react";
import { Tab, Grid, GridColumn, Image,Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/ztm.png";

const panes = [
    { menuItem: {icon: 'file code', content: 'Technologie' }, render: () => <Tab.Pane>Do implementacji narzędzia wykorzystałem Reacta oraz .net.
         .net api działa jako pośrednik który przyjmuje otwarte dane ztm gdańsk i przekształca je w łatwiejsze do analizowania . </Tab.Pane> },
    { menuItem: {icon: 'lock', content: 'Wyzwania' }, render: () => <Tab.Pane>Otwarte dane ZTM Gdańsk nie są najlepszej jakości, dokumentacji w zasadzie nie ma i 
        momentami wątpiłem czy projekt ma sens.
    </Tab.Pane> },
    { menuItem: {icon: 'dollar', content: 'Benefity' }, render: () => <Tab.Pane>Dojazd do pracy jest bardzo ułatwiony,a ja nie musze martwić się spóźnieniami.</Tab.Pane> },
  ]

export default function SecondProject() {
    return(
        <div className="projectSection">

        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn textAlign="right">
            <Container>
                <Header as='h1' id="pod_tytul">Portal komunikacji miejskiej</Header>
                <Header as='h3' id="opisMnie">Projekt który nauczył mnie bardzo duzo </Header>
                <p>Postanowiłem ułatwić sobie dojazd do pracy dzięki portalowi komunikacji miejskiej.
                    Na portalu mozna wybrać przystanek i zobaczyć ile opóźniony jest nasz autobus.
                    Mozna równiez dodać swoją trase i przeanalizować przystanki
                </p>
                <Tab panes={panes} />
                </Container>
            </GridColumn>
            <GridColumn centered id="">
                <Image src={code} size='large' rounded id="test" />
            </GridColumn>
        </Grid>
        </div>
    )
}