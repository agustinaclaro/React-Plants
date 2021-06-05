import './footer.scss'
import {faInstagram}from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ()=>{
    return(
        <div className="footer_global">
            <div className="footer_social_icons">
                <nav>
                    <ul>
                        <li><a href="http://facebook.com" target="_blank">< FontAwesomeIcon icon={faFacebook} className="logoFooter"/></a></li>
                        <li><a href="http://instagram.com" target="_blank">< FontAwesomeIcon icon={faInstagram} className="logoFooter"/></a></li>
                        <li><a href="http://whatsapp.com" target="_blank">< FontAwesomeIcon icon={faWhatsapp} className="logoFooter"/></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <p className="contacto_redes">Contactanos en nuestras redes sociales</p>
            </div>

            <div>
                <p className="copyright"> &copy; Copyright 2021- Coderhouse &reg; camada12415</p>
            </div>
        </div>


    )

}
export default Footer;