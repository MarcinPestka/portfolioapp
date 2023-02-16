import {
  Grid,
  GridColumn,
  Image,
  Header,
  Container,
  Button,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { homePageProjects } from "../Models/homePageProjects";
import parse from 'html-react-parser'


export default function RightSideProject(textThis:homePageProjects) {
  const temp = textThis;

  return (
    <div className="projectSection">
      <Grid stackable verticalAlign="middle" columns={2}>
        <Image src={temp.image} size="medium" rounded id="testRight" centered/>
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
              See more
              </Button>
            </Container>
          </Container>
        </GridColumn>
        <GridColumn centered id="big-screen-image">
          <Image src={temp.image} size="medium" rounded id="test" centered/>
        </GridColumn>
      </Grid>
    </div>
  );
}
