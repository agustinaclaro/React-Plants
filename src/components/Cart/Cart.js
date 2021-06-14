import './Cart.scss'
import { Fragment, useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import {Link} from 'react-router-dom'


export const Cart = ( {setShowForm}) => {
    const { cart, clear, totalPriceCart} = useContext(CartContext)
    
    return (
            <Fragment> 
            {cart.length > 0 ? (
                <Fragment> 
                  
                     <h2 className="cartTitle container">Carrito</h2>
                     <div className="RemoveAllContainer container">
                        <button className="btn_Remove"
                            onClick={() => clear()}>Borrar Todo</button>
                    </div>
        
                    {cart.map(({ item, quantity }) =>
                        <CartItem key={item.title} item={item}
                            quantity={quantity} showButtonRemove={true}>
                        </CartItem>
                  )}
                     <div className="cart-checkout">
                    <p className="total_Cart container">Total Compra: <span>${totalPriceCart()}</span></p>
                    <button className="checkOut-button" onClick={() => setShowForm(true)}>CHECKOUT</button>
                     </div>       

 
                </Fragment> 

                ) : (
                
                    <div className="cartEmptyContainer container">
                    <div className="col-12">    
                            <div className="empty-cart-content">
                                <div className="empty-cart-text">
                                    <h2>Tu carrito esta vacio &#128576;</h2>
                                </div>  
                            </div> 
                    <Link to='/products'>
                        <button className="btn_go_Home">Ver todos los productos</button>
                    </Link>
                    </div>
                </div>

      
                )
        }
        </Fragment> 
    )
    
} 