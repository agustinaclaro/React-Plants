import { useState } from 'react';
import './products.scss';


const ProductCard = (props) => {
    const [addToCartText, setAddtoCartText] = useState('AÑADIR');   
    return (
        <div id={props.id} className="card">
            <img src={props.imgUrl} onClick={props.onImageClick} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                <button
                    className="btn-card"
                    onClick={() => setAddtoCartText('REMOVE') }
                >
                    {addToCartText}
                
                </button>
            </div>
        </div>
    )
};

export default ProductCard;
