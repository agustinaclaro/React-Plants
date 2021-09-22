import './Inicio.scss'
<<<<<<< HEAD
import inicio_back from '../../inicio_back.jpg'
import { Link } from 'react-router-dom'


export const Inicio = () => {
    return (
        <div className="main-site" >
            <img src={inicio_back} className="img-fluid" />
            
                <Link to='/products'>
                    <button className="btn_go_products">Ver todos los productos</button>
                </Link>
            </div>
     

=======
import inicio_back from'../../inicio_back.jpg'
import {Link} from 'react-router-dom'


export const Inicio = () => {
    return(
        <div className= "main-site" >
        <img src={inicio_back} className="img-fluid" />
       
        <Link to='/products'>
                        <button className="btn_go_products">Ver todos los productos</button>
                    </Link>
        
                    </div>
  
>>>>>>> 0b1a0f535314b5b8aa45f25b31ec696315e22b7c
    )
}
    ;