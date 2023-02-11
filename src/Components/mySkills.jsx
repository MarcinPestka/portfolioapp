import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Resources/logo_nav.png";
import pdf from "../Resources/placeHolder.pdf";
import { Tab, Menu, Segment } from 'semantic-ui-react';
import Toggle from './toggle';

export default function MySkills() {
    const panes = [
        { menuItem: '.Net', render: () => <Tab.Pane>Technologia z którą czuje się najbardziej komfortowo.</Tab.Pane> },
        { menuItem: 'React', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Bazy danych', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        { menuItem: 'Analityczne myślenie', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      ]
      
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
}
