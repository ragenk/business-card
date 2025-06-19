import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <footer>
        <a href=''><FontAwesomeIcon icon={faSquareXTwitter} /></a>
        <a href=''><FontAwesomeIcon icon={faSquareFacebook} /></a>
        <a href=''><FontAwesomeIcon icon={faSquareInstagram} /></a>
        <a href=''><FontAwesomeIcon icon={faSquareGithub} /></a>
      </footer>
    </>
  );
}

export default Footer;
