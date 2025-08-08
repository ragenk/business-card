import profilePicture from "../assets/profile-picture.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons' */

function Header() {
    return (
        <>
            <header>
                 <img
                className="profile-picture"
                src={profilePicture}
                alt="Smiling person facing forward with a neutral background, conveying a friendly and approachable mood"
                />
                <h1>Rafael Aguasvivas, B.Eng.</h1>
                <p className="job-title">Frontend Developer</p>
                <small className="website">ikydo.dev</small>
                <div className="btn-wrapper" >
                    <a aria-label="Chat on WhatsApp" href="https://wa.me/18094324277" className="btn btn-contact"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a>
                    <a href="#" className="btn btn-linkedin"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                </div>
            </header>           
        </>
    )
}

export default Header;