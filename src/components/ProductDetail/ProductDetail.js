import './ProductDetail.scss'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCounter from '../ItemCount/ItemCount.js';


const ProductDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)

    return (

        <div className="card-pd container">
            <div className="card-body-pd">
                <h5 className="card-title-pd">{product.title}</h5>
                <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                <p className="card-price-pd">precio $:{product.price}</p>


                <div className="buttonAddContainer">
                    <button className="buttonAdd" onClick={() => { addItem(product, 1) }}   > Agregar al carrito </button>
                </div>
                <div className="buttoBackContainer">
                    <button className="buttonAdd" > seguir comprando </button>
                </div>
            </div>

            <img src={product.imgUrl} className="card-img-top-pd" alt="..." />

        </div>
    )
};

export default ProductDetail;
