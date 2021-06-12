
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
        const db=getFirestore
        const ItemColection = db.colection('products')
        ItemColection.get()
        .then((querySnapshot)=>{
                if(querySnapshot.size ===0)
                    setProduct(querySnapshot.docs.map((doc) => (doc.data())))
                
            }).catch(
                (error) => console.error("Firestore error:" , error)
        )

    },[])

    return (
        <div className="cards-group">
            {products.map((products) => (
                <Item
                    key={products.id}
                    title={products.title}
                    price = {products.price}
                    imgUrl={products.imgUrl}
                    onImageClick={() => (`/products/${product.id}`)}
                    onAddtoCart={() => addItem(product, 1)}
                />
            ))}
        </div>
    );
};

export default ItemList;
