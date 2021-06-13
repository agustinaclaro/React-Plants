
import Item from '../Item/Item';
import './ItemList.scss';
import {  useState,useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext'
import { getFirestore } from '../../firebase';

const ItemList = ({ products = [] }) => {
   
    const { addItem } = useContext(CartContext)
    const [product, setProduct]= useState([])
    const [isLoading, setIsLoading] = useState(false)

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
        <div className="cards-group">
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
