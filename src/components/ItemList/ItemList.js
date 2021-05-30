
import Item from '../Item/Item';
import './ItemList.scss';
import { useHistory } from 'react-router-dom';

const ItemList = ({ products }) => {
    const history = useHistory();
    return (
        <div className="cards-group">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    imgUrl={product.imgUrl}
                    onImageClick={() => history.push(`/products/${product.id}`)}
                />
            ))}
        </div>
    );
};

export default ItemListContainer;
