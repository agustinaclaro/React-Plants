import {faCartArrowDown}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const CardWidgest =(props)=>{
    return (
        <div className="nav-cart">
           <input type="text" id="input-navbar" className="in-navbar" placeholder="buscar" />
           <button id="cart-button"className="btn-cart" data-toggle="modal" >
               <a>< FontAwesomeIcon icon={faCartArrowDown} className="logoCartNav"/></a>
               <p className="numberCountCart">{props.count}</p>
            </button>
         </div>
    )
   
}
export default CardWidgest;
