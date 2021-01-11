// Styling
import '../styles/Footer.css';

// Social Media

import linkedin from '../images/Linkedin.png';
import github from '../images/GitHub.png';
import instagram from '../images/Instagram.png';

// TO-DO: Replace text with image of icons
function Footer() {
    return (
        <div class="footer flex center">
            <section class="footer-wrapper" id="contact">
                <a href="mailto:emily.zou@gmail.com">
                    <h4 class="email">emily.zou@gmail.com</h4>
                </a>
                <div class="social-media-icons">
                    <a href="https://www.linkedin.com/in/emily-zou/"><img class="linkedin" src={linkedin} alt="linkedin icon"></img></a>
                    <a href="https://github.com/e-zou"><img class="github" src={github} alt="github icon"></img></a>
                    <a href="https://www.instagram.com/emitheegg/"><img class="insta" src={instagram} alt="instagram icon"></img></a>
                </div>
            </section>
        </div>
    );

}
export default Footer