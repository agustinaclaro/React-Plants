
import Item from '../Item/Item';
import './ItemList.scss';
import {  useState, useEffect } from 'react';
import { getFirestore } from '../../firebase';

const ItemList = ({ products = [] }) => {
   
   
    const [product, setProduct]= useState([])


    useEffect(()=>{
        const db=getFirestore()
        const ItemColection = db.collection('products')
        ItemColection.get()
        .then((querySnapshot)=>{
                if(querySnapshot.size ===0){}
                    setProduct(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
                
            }).catch(
                (error) => console.error("Firestore error:" , error)
        )

    },[])

    return (
       
        <div className="cards-group container ">
            {products.map((products) => (
                <Item
                    key={products.id}
                   item={products}
                />
            ))}
        </div>
       
    );
};

export default ItemList;
