import './Cart.scss'
import { Fragment, useContext } from 'react';

import { CartContext } from '../../Context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import {Link} from 'react-router-dom'


export const Cart = () => {
    const { cart, clear, totalPriceCart} = useContext(CartContext)
    
    return (
        <div className="cart_body">
            <h2 className="cartTitle container">Carrito</h2>
        
                <Fragment>
                  
                    {cart.map(({ item, quantity }) =>
                        <CartItem key={item.title} item={item}
                            quantity={quantity} showButtonRemove={true}>
                        </CartItem>
                    )}
                    <p className="total_Cart container">Total Compra: <span>${totalPriceCart()}</span></p>

                    <div className="RemoveAllContainer container">
                        <button className="btn_Remove"
                            onClick={() => clear()}>Borrar Todo</button>
                    </div>

                </Fragment> 
                  
                <div className="cartEmptyContainer container">
                   
                    <Link to='/products'>
                        <button className="btn_go_Home">Volver al inicio</button>
                    </Link>
            
                </div>
            
        </div>
    )
} 