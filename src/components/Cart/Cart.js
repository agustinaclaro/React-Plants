import './Cart.scss'
import {Fragment, useContext} from 'react';
import {CartContext} from '../../Context/CartContext'
import {CartItem} from '../CartItem/CartItem'


export const Cart =()=>{
   const {cart, clear,totalPrice}= useContext(CartContext)
   return(
       <div>
           <h2 className="cartTitle">Carrito</h2>
           <Fragment>
           <div className="buttonRemoveAllContainer">
                    <button className="buttonRemoveAll" 
                        onClick={()=>clear()}>Borrar Todo</button>  
                </div>
                {cart.map(({item,quantity} ) => 
                    <CartItem key={item.title} item={item} 
                                    quantity={quantity}>
                    </CartItem>
                )}


           </Fragment>
       </div>
   )
}