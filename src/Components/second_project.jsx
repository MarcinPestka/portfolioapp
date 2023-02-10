import React from "react";
import { Tab, Grid, GridColumn, Image, Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/ztm.png";

let text = {
    title: "Portal komunikacji miejskiej",
    subTitle: "Projekt który nauczył mnie bardzo duzo",
    description: "Postanowiłem usprawnić moją codzienną drogę do pracy, budowałem portal komunikacji miejskiej. Na portalu można wybrać przystanek i śledzić aktualny stan naszego pojazdu, aby uniknąć niepotrzebnego czekania na przystanku. Ponadto, istnieje możliwość dodania własnej trasy i dokładnej analizy dostępnych przystanków.",
    technology: "Do implementacji narzędzia wykorzystałem Reacta oraz .net .net api działa jako pośrednik który przyjmuje otwarte dane ztm gdańsk i przekształca je w łatwiejsze do analizowania . ",
    obstacles: "Otwarte dane ZTM Gdańsk nie są najlepszej jakości, dokumentacji w zasadzie nie ma i momentami wątpiłem czy projekt ma sens.",
    benefits: "Dojazd do pracy jest bardzo ułatwiony,a ja nie musze martwić się spóźnieniami.",
}

export default function SecondProject(language) {
    if (language.language == "en") {
        text = {
            title: "Public transportation portal",
            subTitle: "Project that makes my daily life a lot easier",
            description: "I have decided to improve my daily commute to work by building a public transportation portal. On the portal, one can select a stop and monitor the current status of our vehicle to avoid unnecessary waiting at the stop. Additionally, there is the option to add a custom route and thoroughly analyze available stops.",
            technology: "Do implementacji narzędzia wykorzystałem Reacta oraz .net .net api działa jako pośrednik który przyjmuje otwarte dane ztm gdańsk i przekształca je w łatwiejsze do analizowania . ",
            obstacles: "Otwarte dane ZTM Gdańsk nie są najlepszej jakości, dokumentacji w zasadzie nie ma i momentami wątpiłem czy projekt ma sens.",
            benefits: "Dojazd do pracy jest bardzo ułatwiony,a ja nie musze martwić się spóźnieniami.",
        }
    }
    const panes = [
        { menuItem: {icon: 'file code', content: 'Technologie' }, render: () => <Tab.Pane>{text.technology}</Tab.Pane> },
        { menuItem: {icon: 'lock', content: 'Wyzwania' }, render: () => <Tab.Pane>{text.obstacles}</Tab.Pane> },
        { menuItem: {icon: 'dollar', content: 'Benefity' }, render: () => <Tab.Pane>{text.benefits}</Tab.Pane> },
      ]
    return (
        <div className="projectSection">

            <Grid stackable verticalAlign='middle' columns={2}>
                <GridColumn textAlign="right">
                    <Container>
                        <Header as='h1' id="pod_tytul">{text.title}</Header>
                        <Header as='h3' id="podTytulProjektu">{text.subTitle}</Header>
                        <p id="opisMnie">{text.description}</p>

                        <Tab panes={panes} id="testDisplay" />
                    </Container>
                </GridColumn>
                <GridColumn centered id="">
                    <Image src={code} size='large' rounded id="test" />
                </GridColumn>
            </Grid>
        </div>
    )
}