import './ProductDetail.scss'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import {getFirestore} from '../../firebase/index'
import {useParams} from 'react-router-dom'

const ProductDetail = () => {
    const { addItem } = useContext(CartContext)
    const { id } = useParams();
    const [product,setProduct]= useState('')
  
    useEffect(()=>{
     if(id){ 
    const db=getFirestore()
    db.collection('products').doc(id).get()
        .then(snapshot => setProduct(snapshot.data()))
          .catch(
                    (error) => console.error("Firestore error:" , error)
            )
    }},[id])
   

   
    return (

        <div id={product?.id} className="card-pd container">
            <div className="card-body-pd">
                <h5 className="card-title-pd">{product?.title}</h5>
                <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                <p className="card-price-pd">precio $:{product?.price}</p>
                
                <button id="cart-button-cart" onClick={()=>addItem(product,1)}className="buttonAddpd numbercou " data-toggle="modal">
                       AGREGAR AL CARRITO
                    </button>
        
            
            
            </div>
          

            <img src={product?.imgUrl} className="card-img-top-pd" alt="..." />


        </div>
    )
};

export default ProductDetail;
