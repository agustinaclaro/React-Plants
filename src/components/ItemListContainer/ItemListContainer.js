
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CategoryLink from '../CategoryLink/CategoryLink'
import {getFirestore} from '../../firebase/index'



import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productItem, setProductsItem] = useState([]);
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('products');
    
        if(categoryId) {
            const filteredProd = itemCollection.where("categoryId", "==", categoryId);
            filteredProd.get().then(querySnapshot => {
                if(querySnapshot === 0) {
                    console.log('no results');
                }
    
                setProductsItem(querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() })))
            }).catch(error => {
                console.log(error)
            })
        } else {
            itemCollection.get().then(querySnapshot => {
                if(querySnapshot === 0) {
                    console.log('no results');
                }
    
                setProductsItem(querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() })))
            }).catch(error => {
                console.log(error)
            })
        }
    }, [categoryId])


    return (
        <div className="itemListContainer container">
            <CategoryLink />
            <ItemList products={productItem}/>
        </div>
    )
}
export default ItemListContainer;