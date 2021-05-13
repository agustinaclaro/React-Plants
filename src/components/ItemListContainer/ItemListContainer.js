
import ProductCard from '../ProductCard/ProductCard';
import './ItemListContainer.scss';
import { useHistory } from 'react-router-dom';

const ItemListContainer = ({ products }) => {
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
