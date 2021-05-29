import './Inicio.scss'
import inicio_back from'../../inc_background.jpg'


export const Inicio = () => {
    return(
      <div className = "inicio-site">
        <h2 className="welcome-text">Bienvenidos a Pequeño Respiro </h2>
        <div className= "main-site" >
        <img src={inicio_back} className="img-fluid" />
        </div>
      
    </div>
    )
    }
;