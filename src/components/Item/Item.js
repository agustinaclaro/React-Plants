
import './Item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye}from '@fortawesome/free-solid-svg-icons'
import {faCartArrowDown}from '@fortawesome/free-solid-svg-icons'






 const Item = (item) => { 
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"> 
        <div id={item.id} className="card">
            <img src={item.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>

                <button id="cart-button-view" className="btn-cart-view" data-toggle="modal">
                < FontAwesomeIcon icon={faEye}  onClick={item.onImageClick} className="logo-view"/>
            </button>
            <button id="cart-button-cart" className="btn-cart-card" data-toggle="modal">
                < FontAwesomeIcon icon={faCartArrowDown} className="logo-cart-card"/>
            </button>
            </div>
            {(item.stock === 0 ) && <p className="outOfStock">Sin stock</p>}
        </div>
       
        </div>
    )
};
export default Item;
