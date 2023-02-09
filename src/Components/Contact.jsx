import React from "react";
import { Button, Menu, Grid, GridColumn, Image, Header, Container, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from "../Resources/IMG_2120.jpg";



export default function Contact() {
    return (
        <div id="testWidth">
            <Container textAlign="center">
                <p id="opisMnie">Dzięki za poświęcenie chwili i przeczytanie mojej strony. Obecnie poszukuje pracy i jestem otwarty na propozycje
                    Jeżeli jesteś zainteresowany napisz do mnie maila  lub napisz do mnie na LinkedIn - rozważę każdą propozycję.
                </p>
                <a id="noTextDecoration" href="mailto:pestka.m.j@gmail.com"><Button className="button-portfolio center" >Napisz mi maila</Button></a>
            </Container>
        </div>
    )
}