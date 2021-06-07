import './ProductDetail.scss'
import { useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/products';
import ItemCounter from '../ItemCount/ItemCount.js';
import {Link} from 'react-router-dom'

const ProductDetail = () => {
   
    const { id } = useParams();
    const[product, setProduct]=useState({})
    useEffect(() => {
        const getProduct = () => {
            getProductById(id)
                .then((data) => setProduct(data))
                .catch((error) => console.error('HUBO UN ERROR: ', error))
        }

        getProduct();
    }, []);

    const onAdd =(count)=>{
        alert(`Agrego al carrito ${count} ${product.title}`)
        
    }
    return (

        <div id={product.id} className="card-pd">
            <div className="card-pd-tx">
                <div className="card-body-pd">
                    <h5 className="card-title-pd">{product.title}</h5>
                    <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                    <p className="card-price-pd">precio :{product.price}</p>                
                </div>
                    < ItemCounter stock={product.stock} initial={1} onAdd={onAdd} />
                    <div>
                 <Link to="/cart">
                     <button 
                             className="buttonFinish" >
                         Terminar compra
                     </button>
                 </Link>
             </div>
            </div>
            <img src={product.imgUrl} className="card-img-top-pd" alt="..." />
        
    
             </div>
    )
};

export default ProductDetail;
