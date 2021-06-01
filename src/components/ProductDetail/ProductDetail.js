import './ProductDetail.scss'
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { getProductById } from '../../services/products';
import ItemCounter from '../ItemCount/ItemCount.js'

const ProductDetail = () => {
    const { id } = useParams();
    const productData = getProductById(id);
    const onAdd =(count)=>{
        alert(`Agrego al carrito ${count} ${productData.title}`)
    }
    return (

        <div id={productData.id} className="card-pd">
            <div className="card-pd-tx">
                <div className="card-body-pd">
                    <h5 className="card-title-pd">{productData.title}</h5>
                    <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                    <p className="card-price-pd">precio :{productData.price}</p>
                    < ItemCounter stock={productData.stock} initial={1} onAdd={onAdd} />
                </div>

            </div>
            <img src={productData.imgUrl} className="card-img-top-pd" alt="..." />
        </div>
    )
};

export default ProductDetail;
