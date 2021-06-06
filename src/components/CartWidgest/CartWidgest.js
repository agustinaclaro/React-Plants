import {faCartArrowDown}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

const CardWidgest =(props)=>{
    const {totalItems} = useContext(CartContext)
    return (
        <div className="nav-cart">
           <button id="cart-button"className="btn-cart" data-toggle="modal" >
               <a>< FontAwesomeIcon icon={faCartArrowDown} className="logoCartNav"/></a>
               <span className="numberCountCart">{props.count}</span>
            </button>
            {
            totalItems > 0 && <span className="numberCountCart">({totalItems})</span>
            }
            
         </div>
    )
   
}
export default CardWidgest;
