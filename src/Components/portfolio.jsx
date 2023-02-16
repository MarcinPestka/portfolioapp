import React from "react";
import { Button, Menu, Grid, GridColumn, Image,Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from "../Resources/ja3.jpg";
import parse from 'html-react-parser'

let items = {
    description: 'Student Uniwersytetu Gdańskiego, z doświadczeniem w realizacji <a href="#" id="highlight"> komercyjnych projektów.</a> Obecnie kontynuuję swój rozwój w zakresietworzenia <a href="#" id="highlight">kodu wysokiej jakości</a>. Dzięki mojemu zaangażowaniu i pasji, udało mi się wdrożyć w życie kilka interesujących projektów, dających mi możliwość zdobycia cennego doświadczenia i uzupełnienia moich umiejętności. ',
    buttonText: "Get in touch with me"
}


export default function PorftolioComponent(language) {

    if(language.language == "en"){
        items = {
            description: 'Student at the University of Gdańsk with experience in implementing <a href="#" id="highlight">commercial projects</a>. Currently, I am continuing my development in the area of creating <a href="#" id="highlight">high-quality code</a>. Thanks to my commitment and passion, I have successfully brought several interesting projects to life, giving me the opportunity to gain valuable experience and improve my skills.',
            buttonText: "Get in touch with me"
        }
    }

    return(
        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn textAlign="left" id="firstParagraph">
                <Container>
                <Header as='h1' id="tytul">Marcin Pestka</Header>
                <Header as='h3' id="pod_tytul">Full-stack developer</Header>
                <p id="opisMnie">{parse(items.description)}</p>
                <Container textAlign="center">
                <Button className="button-portfolio" href="#contact">{items.buttonText}</Button>
                </Container>
                </Container>
            </GridColumn>
            <GridColumn centered id="photo_column">
            <Image src={logo} circular />
            </GridColumn>
        </Grid>
    )
}