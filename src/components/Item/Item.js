
import './Item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../Context/CartContext'
import{useContext} from 'react'
import {Link} from 'react-router-dom'
import ItemCounter from '../ItemCount/ItemCount.js';
import { useState, useEffect } from 'react';

const Item = ({item}) => {
    const [finishAdd,setFinishAdd] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    
    const onAdd = (quantity) => {
        setQuantity(quantity)

    }
    const toPay = (qtyandItem)=> {
        addItem(item,qtyandItem)
        setQuantity(0)
    }
    useEffect(() => {
    
    
        if (quantity !== 0) {
            setFinishAdd(false)
        } 
    
    }, [quantity])
   
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div id={item.id} className="card">
                <img src={item.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <Link to= {`/products/${item.id}`}>
                    <button id="cart-button-view" onClick={item.onImageClick} className="btn-cart-view" data-toggle="modal">
                        < FontAwesomeIcon icon={faEye} className="logo-view" />
                    </button> </Link>
                    { finishAdd  ? 
                < ItemCounter stock={item.stock} initial={1} onAdd={onAdd} />
              :
                       <div className="finishBuy">
                    <button className="btn-finishBuy"onClick={()=>toPay(quantity)}  >terminar la compra</button>
                </div>
}
                </div>
                {(item.stock === 0) && <p className="outOfStock">Sin stock</p>}
            </div>
        </div>
    )
};
export default Item;
