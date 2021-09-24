import './inicio.scss'
import inicio_back from '../../Assets/inicio_back.jpg'
import { Link } from 'react-router-dom'


export const Inicio = () => {
    return (
        <div className="main-site" >
            <img src={inicio_back} className="img-fluid" />
            
                <Link to='/products'>
                    <button className="btn_go_products">Ver todos los productos</button>
                </Link>
            </div>
     

    )
}
    ;