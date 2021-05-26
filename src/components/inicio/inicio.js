import './Inicio.scss'
import siteImg from'../../siteImg.jpg'
import logo from '../../logo.png'


export const Inicio = () => {
    return(
      <div className = "inicio-site">
        <div className="square-green"></div>
        <div className="img-front">
        <img src={siteImg} className="siteImg" alt="foto site"/>
        </div>
        <div className ="inicio-text">
        <h2 className="welcome-text">Bienvenidos</h2>
        
        <p>PEQUEÑO RESPIRO</p>
        <img src={logo} className="logo-site" alt="logo site"/>
        
        </div>
    </div>
    )
    }
;