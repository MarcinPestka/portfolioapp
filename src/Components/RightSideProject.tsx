import React from "react";
import {
  Tab,
  Grid,
  GridColumn,
  Image,
  Header,
  Container,
  Button,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import code from "../Resources/ztm.png";
import { homePageProjects } from "../Models/homePageProjects";
import parse from 'html-react-parser'


export default function RightSideProject(textThis:homePageProjects) {
  const temp = textThis;
  const url = "/en/ztmapp";

  return (
    <div className="projectSection">
      <Grid stackable verticalAlign="middle" columns={2}>
        <GridColumn textAlign="right">
          <Container>
            <Header as="h1" id="pod_tytul">
              {temp.title}
            </Header>
            <Header as="h3" id="podTytulProjektu">
              {temp.subTitle}
            </Header>
            <p id="opisMnie">{parse(temp.descreiption)}</p>
            <Container textAlign="center">
              <Button className="button-portfolio" href={temp.url}>
                Zobacz więcej
              </Button>
            </Container>
          </Container>
        </GridColumn>
        <GridColumn centered id="">
          <Image src={temp.image} size="large" rounded id="test" />
        </GridColumn>
      </Grid>
    </div>
  );
}
