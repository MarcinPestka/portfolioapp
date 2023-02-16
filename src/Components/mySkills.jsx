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
        { menuItem: '.Net', render: () => <Tab.Pane>Definitely, .NET is the technology I feel most comfortable with, and I have the most experience with. The code I produce is of the highest quality. I also develop the most in this technology, despite reading about and programming in front-end technologies lately. The vast selection of NuGet packages is also one of the things I love about .NET programming </Tab.Pane> },
        { menuItem: 'React', render: () => <Tab.Pane>React is now one of my favorite tools - I really enjoy writing code with it, and in combination with my backend skills, I can create really interesting projects that help me gain a lot of experience in the field of web development. Together with .NET, these are currently my favorite technologies</Tab.Pane> },
        { menuItem: 'Data Bases', render: () => <Tab.Pane>Of course, I have to mention databases such as ... as one of my useful skills. The knowledge gained during my studies, supported by practical use in several applications, also allowed me to develop in this direction. Combined with .NET Entity Framework, creating database applications is very satisfying for me, from which I learn a lot.</Tab.Pane> },
      ]
      
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
}
