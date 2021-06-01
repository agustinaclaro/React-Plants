import './itemListContainer.scss'
import {ItemList} from '../itemList/itemList'
import { getCategoryId } from '../../services/products';

const ItemListContainer = () => {
    const {categoryId} = useParams()
    const categoty = getCategoryId();

    return(
        <div className="itemListContainer">
            <ItemList data={data} />
        </div>
    )
} 
export default ItemListContainer;