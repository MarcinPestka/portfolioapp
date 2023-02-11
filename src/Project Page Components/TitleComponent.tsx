import React from "react";
import { Button, Menu, Grid, GridColumn, Image,Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import parse from 'html-react-parser'
import { ProjectPageTexts } from "../Models/projectSiteTexts";


export default function Title(text:ProjectPageTexts) {
    const items = text;

    return(
                <Container textAlign="left">
                <Header as='h1' id="tytul">{items.title}</Header>
                <Header as='h3' id="pod_tytul">{items.subTitle}</Header>
                <Container textAlign="left">
                </Container>
                </Container>
    )
}