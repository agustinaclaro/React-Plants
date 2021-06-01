import './CartItem.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export const CartItem = ({ item, quantity }) => {
    const {removeItem} = useContext(CartContext)

    const totalCartItem = (price,qty) => price * qty
return(
    <div className="cart_item">
        <div>
            <img className="Img_itemCart" src={item.imgUrl} alt={item.title} />
        </div>
        <div className="cart_detail">
            <h3>{item.title}</h3>
            <h4>Precio :{item.price}</h4>
            <p>Cantidad:{quantity}</p>
            <p>SubTotal: €{totalCartItem(item.price,quantity)}</p>


        </div>
        <div>
            <button className="buttonRemoveItem"
                onClick={() => removeItem(item.id, quantity)}></button>
        </div>

    </div>
)


}