import React from "react";
import { Tab, Grid, GridColumn, Image, Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import code from "../Resources/ztm.png";
import { ProjectPageTexts } from "../Models/projectSiteTexts";
import parse from 'html-react-parser'

export default function FirstSection(text:ProjectPageTexts) {
    const test = text;
    return (
        <div className="projectSection">

            <Grid stackable verticalAlign='middle' columns={2}>
                <GridColumn textAlign="left">
                    <Container>
                        <p id="opisMnie">{parse(test.descreiption)}</p>
                    </Container>
                </GridColumn>
                <GridColumn centered id="">
                    <Image src={text.image} size='large' rounded id="test" />
                </GridColumn>
            </Grid>
        </div>
    )
}