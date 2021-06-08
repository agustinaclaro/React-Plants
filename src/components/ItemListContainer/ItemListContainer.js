
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductCategoryId, getProducts } from '../../services/products';
import CategoryLink from '../CategoryLink/CategoryLink'

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProductsList = () => {
            if (categoryId) {
                getProductCategoryId(categoryId)
                    .then((data) => setProducts(data))
                    .catch((error) => console.error('HUBO UN ERROR: ', error))
            } else {
                getProducts()
                    .then((data) => setProducts(data))
                    .catch((error) => console.error('HUBO UN ERROR: ', error))
            }
        }

        getProductsList();
    }, [categoryId]);


    return (
        <div className="itemListContainer">
            <CategoryLink />
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;