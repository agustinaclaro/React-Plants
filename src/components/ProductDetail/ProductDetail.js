import './ProductDetail.scss'
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { getProductById } from '../../services/products';
import TitleProcutDetail, { TitleProductDetail } from '../TitleProductDetail/TitleProductDetail'
import Itemcounter from '../ItemCounter/Itemcounter.js'

const ProductDetail = (props) => {
    const { id } = useParams();
    const productData = getProductById(id);
    return (

        <div id={productData.id} className="card-pd">
            <div className="card-pd-tx">
                <div className="card-body-pd">
                    <h5 className="card-title-pd">{productData.title}</h5>
                    <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                    <p className="card-text-add">Agregar a carrito</p>
                    <p className="card-price-pd">{productData.price}</p>
                    <Itemcounter/>
                </div>

            </div>
            <img src={productData.imgUrl} className="card-img-top-pd" alt="..." />
        </div>
    )
};

export default ProductDetail;
