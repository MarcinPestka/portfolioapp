import React from "react";
import { Button, Menu, Grid, GridColumn, Image, Header, Container, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from "../Resources/IMG_2120.jpg";



export default function Footer() {
    return (
        <Container id="footer">
            <a href="https://github.com/MarcinPestka/portfolioapp" id="footerHrev">
            <p id="footerText">Designed and built by Marcin Pestka</p>
                <div id="githubFooter">
                    <Icon name="github" size="large"></Icon>
                    <span id="footerText">Sprawdź</span>
                </div>
            </a>
        </Container>
    )
}