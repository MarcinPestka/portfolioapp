import { Container, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



export default function Footer() {
    return (
        <Container id="footer">
            <a href="https://github.com/MarcinPestka/portfolioapp" rel="noopener noreferrer" target="_blank" id="footerHrev">
            <p id="footerText">Designed & Built by Marcin Pestka</p>
                <div id="githubFooter">
                    <Icon name="github" size="large"></Icon>
                    <span id="footerText">Check it out</span>
                </div>
            </a>
        </Container>
    )
}