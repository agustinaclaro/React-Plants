import { useState } from 'react';
import { useParams } from "react-router-dom"
import { getProductById } from '../../services/products';


const ProductDetail = (props) => {
    const { id } = useParams();
    const productData = getProductById(id);
    return (
        <div id={productData.id} className="card">
            <img src={productData.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">{productData.price}</p>
            </div>
            <div className="btn-productDetail">
                <input type="button" value="-" className="btn-increment"/>
                <input type="text" placeholder="1" className="btn-text"></input>
                <input type="button" value="+" className="btn-decrement"/>
            </div>
        </div>
    )
};

export default ProductDetail;
