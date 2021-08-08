import ProductDetail from '../ProductDetail/ProductDetail'
import { useState, useEffect, } from 'react';
import {getFirestore} from '../../firebase/index'
import {useParams} from 'react-router-dom'

const ContainerProductDetail = () => {
    const { id } = useParams();
    const [product,setProduct]= useState('')
  
    useEffect(()=>{
     if(id){ 
    const db=getFirestore()
    db.collection('products').doc(id).get()
        .then(snapshot => setProduct({ id:snapshot.id, ...snapshot.data() }))
          .catch(
                    (error) => console.error("Firestore error:" , error)
            )
    }},[id])
   
    return (

        <div className="card-pd container">
           <ProductDetail product= {product} />
        </div>
    )
};

export default ContainerProductDetail;