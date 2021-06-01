
import { useParams } from "react-router-dom"
import { getProductCategoryId } from '../../services/products';

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const {categotyId} = useParams()
    const categoty = getProductCategoryId(categotyId);

    return(
        <div className="itemListContainer">
           <ItemList/>
        </div>
    )
} 
export default ItemListContainer;