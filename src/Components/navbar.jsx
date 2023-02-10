import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Resources/logo_nav.png";
import pdf from "../Resources/placeHolder.pdf";
import { Button, Flag, Icon } from 'semantic-ui-react';
import Toggle from './toggle';

export default function NavBarCustom({ handleClickProjekty,language }) {
  let text = {      
    project:"Projekty",
    expirience:"Doświadczenie",
    contact:"Kontakt",
    button:"Sprawdź moje cv",}

  if(language == "en"){
    text = {
      project:"Projects",
      expirience:"Expirience",
      contact:"Contact",
      button:"Check out my CV",
  }

  text = text;

  }
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" id="navbarNaviation" className="align-center">
        <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-center"
              alt="logo marcin pestka"
            /><span id="logoText">M.Pestka</span></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
            <Nav.Link href="#action1" onClick={handleClickProjekty} id="navbarNaviation">{text.project} </Nav.Link>
            <Nav.Link href="#action2" id="navbarNaviation">{text.expirience}</Nav.Link>
            <Nav.Link href="#action3" id="navbarNaviation">{text.contact}</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Button animated='horizontal' color="blue" href={pdf} target = "_blank">
              <Button.Content visible>{text.button}</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Form>
          <Icon name="lightbulb outline" size="large"></Icon><Toggle></Toggle><Icon name="moon" size="large"></Icon>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
