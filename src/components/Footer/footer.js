import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = ()=>{
    return(
        <footer>
        <div className="footer_global">
            <div className="footer_social_icons">
                   <ul className="footer_ul">
                        <li className="footer_li">< FontAwesomeIcon  icon={faFacebook} className="logo_Footer"/></li>
                        <li className="footer_li">< FontAwesomeIcon icon={faInstagram} className="logo_Footer"/></li>
                        <li className="footer_li">< FontAwesomeIcon  icon={faWhatsapp} className="logo_Footer"/></li>
                    </ul>  
            </div>
            <p className="contacto_redes">Contactanos en nuestras redes sociales</p>
            <p className="copyright"> &copy; Copyright 2021- Coderhouse &reg; camada14630</p>
       
        </div>
        </footer>

    )

}
export default Footer;