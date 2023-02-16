import '../App.css';
import { Button, Container } from 'semantic-ui-react';
import Footer from '../Components/footer';
import '../scss/App.scss'


function SiteNotFound(Language: any) {

  return (
    <div>
      <div className="pattern">
      </div>
      <div className='App'>
        <Container className='testt'>
          <Container textAlign="center">
            <p id="notFound">It appears that this site does not exist!
            </p>
            <Button href="http://localhost:3000/en" className="button-portfolio" >Take me back</Button>
          </Container>
        </Container>

        <Container id="notFoundFooter">
          <Footer></Footer>
        </Container>
      </div>
    </div>

  );
}

export default SiteNotFound;
