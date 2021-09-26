import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = ()=>{
    return(
        <footer>
        <div className="footer_global container-fluid">
            <div className="footer_social_icons">
                   <ul className="footer_ul">
                        <li><a href="http://facebook.com" target="_blank">< FontAwesomeIcon  icon={faFacebook} className="logo_footer"/></a></li>
                        <li><a href="http://instagram.com" target="_blank">< FontAwesomeIcon icon={faInstagram} className="logo_footer"/></a></li>
                        <li><a href="http://whatsapp.com" target="_blank">< FontAwesomeIcon  icon={faWhatsapp} className="logo_footer"/></a></li>
                    </ul>  
            </div>
            <p className="contacto_redes">Contactanos en nuestras redes sociales</p>
            <p className="copyright"> &copy; Copyright 2021- Coderhouse &reg; camada14630</p>
       
        </div>
        </footer>

    )

}
export default Footer;