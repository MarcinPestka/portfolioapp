import React from "react";
import { Tab, Grid, GridColumn, Image,Header, Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/placeHolderCode.png";
import { analyze } from "eslint-scope";
import { homePageProjects } from "../Models/homePageProjects";
import parse from 'html-react-parser'

export default function LeftSideProject(textThis:homePageProjects) {
    const url='/en/policyautomation';
    const temp = textThis;

    return(
        <div className="projectSection">
        <Grid stackable verticalAlign='middle' columns={2}>
            <GridColumn centered>
                <Image src={temp.image} size='large' rounded id="test" />
            </GridColumn>
            <GridColumn textAlign="left">
            <Container>
                <Header as='h1' id="pod_tytul">{temp.title}</Header>
                <Header as='h3' id="podTytulProjektu">{temp.subTitle}</Header>
                <p id="opisMnie">{parse(temp.descreiption)}</p>
                <Container textAlign="center">
                <Button className="button-portfolio" href={temp.url}>Zobacz więcej</Button>
                </Container>
                </Container>
            </GridColumn>
        </Grid>
        </div>
    )
}