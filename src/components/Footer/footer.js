import './footer.scss'
import { faFacebook, faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ()=>{
    return(
        <div className="footer_global">
            <div className="footer_social_icons">
                    <ul>
                        <li><a href="http://facebook.com" target="_blank">< FontAwesomeIcon  icon={faFacebook} className="logo_Footer"/></a></li>
                        <li><a href="http://instagram.com" target="_blank">< FontAwesomeIcon icon={faInstagram} className="logo_Footer"/></a></li>
                        <li><a href="http://whatsapp.com" target="_blank">< FontAwesomeIcon  icon={faWhatsapp} className="logo_Footer"/></a></li>
                    </ul>
              
            </div>
            <p className="contacto_redes">Contactanos en nuestras redes sociales</p>
            <p className="copyright"> &copy; Copyright 2021- Coderhouse &reg; camada14630</p>
       
        </div>


    )

}
export default Footer;