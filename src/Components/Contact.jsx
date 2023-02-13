import React from "react";
import { Button, Menu, Grid, GridColumn, Image, Header, Container, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from "../Resources/IMG_2120.jpg";



export default function Contact() {
    return (
        <div id="testWidth">
            <Container textAlign="center">
                <p id="opisMnie">Thank you for taking the time to read my page. I am currently <a id="highlight">seeking employment</a> and am open to opportunities. If you are interested, please feel free to reach out to me via email or connect with me on <a id="highlight">LinkedIn.</a> 
                </p>
                <a id="noTextDecoration" href="mailto:pestka.m.j@gmail.com"><Button className="button-portfolio center" >Write me an email!</Button></a>
            </Container>
        </div>
    )
}