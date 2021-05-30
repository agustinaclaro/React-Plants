import {faCartArrowDown}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const CardWidgest =(props)=>{
    return (
        <div className="nav-cart">
           <button id="cart-button"className="btn-cart" data-toggle="modal" >
               <a>< FontAwesomeIcon icon={faCartArrowDown} className="logoCartNav"/>cart</a>
               <span className="numberCountCart">{props.count}</span>
            </button>
         </div>
    )
   
}
export default CardWidgest;
