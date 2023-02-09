import React from "react";
import { Button, Menu, Grid, GridColumn, Image,Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from "../Resources/IMG_2120.jpg";



export default function PorftolioComponent() {
    return(
        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn textAlign="left" id="firstParagraph">
                <Container>
                <Header as='h1' id="tytul">Marcin Pestka</Header>
                <Header as='h3' id="pod_tytul">Full-stack developer</Header>
                <p id="opisMnie">Jestem studentem Uniwesytetu Gdańskiego, szukam stażu programistycznego .Net<br/>
                Obecnie rozwijam się w tym kierunku pisania <a href="#" id="highlight">kodu dobrej jakości.</a><br/>
                Ponizej opisałem projektu w których dotychczas brałem udział</p>
                <Button className="button-portfolio">Sprawdź moje projekty</Button>
                </Container>
            </GridColumn>
            <GridColumn centered id="photo_column">
            <Image src={logo} circular />
            </GridColumn>
        </Grid>
    )
}