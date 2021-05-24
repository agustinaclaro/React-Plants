import './Inicio.scss'
import siteImg from'../../siteImg.jpg'
import logo from '../.../logo.png'


export const Inicio = () => {
    return(
      <div className = "inicio-site">
        <img src={siteImg} className="siteImg" alt="foto site"/>
        <div className ="inicio-text">
        <h2>Bienvenido</h2>
        <img src={logo} className="logo-site" alt="logo-site"/>
        </div>
    </div>
    )
    }
;