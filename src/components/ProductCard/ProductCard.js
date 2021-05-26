
import './products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye}from '@fortawesome/free-solid-svg-icons'
import {faCartArrowDown}from '@fortawesome/free-solid-svg-icons'





const ProductCard = (props) => { 
    let addToCartText= "AÑADIR"

  
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div id={props.id} className="card">
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                <button id="cart-button-view" className="btn-cart-view" data-toggle="modal">
                < FontAwesomeIcon icon={faEye}  onClick={props.onImageClick} className="logo-view"/>
            </button>
            <button id="cart-button-cart" className="btn-cart-card" data-toggle="modal">
                < FontAwesomeIcon icon={faCartArrowDown} className="logo-cart-card"/>
            </button>
            </div>
        </div>
        </div>
    )
};
export default ProductCard;
