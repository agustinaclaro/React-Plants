import './Cart.scss'
import { Fragment, useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import {Link} from 'react-router-dom'



 export const Cart = () => {
    const { cart, clear, totalPriceCart } = useContext(CartContext)
    return (
        <div className="cart_body">
            <h2 className="cartTitle">Carrito</h2>
                <Fragment>
                    <div className="RemoveAllContainer">
                        <button className="btn_Remove"
                            onClick={() => clear()}>Borrar Todo</button>
                    </div>
                    {cart.map(({ item, quantity }) =>
                        <CartItem key={item.title} item={item}
                            quantity={quantity} showButtonRemove={true}>
                        </CartItem>
                    )}
                    <p className="total_Cart">Total Compra: ${totalPriceCart()}</p>

                </Fragment> 
                
                <div className="cartEmptyContainer">
                    <p> El carrito se encuentra vacio</p>
                    <Link to='/'><button className="buttonHome">Volver al inicio</button>
                    </Link>
                </div>
            
        </div>
    )
} 
