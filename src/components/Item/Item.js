
import './item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../Context/CartContext'
import{useContext} from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  
    const { addItem } = useContext(CartContext)
    
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
                <img src={item.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <Link to= {`/products/${item.id}`}>
                    <button id="cart-button-view" onClick={item.onImageClick} className="btn-cart-view" data-toggle="modal">
                        < FontAwesomeIcon icon={faEye} className="logo-view" />
                    </button></Link>
                    <button id="cart-button-cart" onClick={()=>addItem(item,1)} className="btn-cart-card" data-toggle="modal">
                        < FontAwesomeIcon icon={faCartArrowDown} className="logo-cart-card" />
                    </button>
                    </div>
            </div>
        </div>    
    )
};
export default Item;
