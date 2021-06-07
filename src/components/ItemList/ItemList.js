
import Item from '../Item/Item';
import './ItemList.scss';
import { useHistory, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

const ItemList = ({ products = [] }) => {
    const history = useHistory();
    const { addItem } = useContext(CartContext)

    return (
        <div className="cards-group">
            {products.map((product) => (
                <Item
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    imgUrl={product.imgUrl}
                    onImageClick={() => history.push(`/products/${product.id}`)}
                    onAddtoCart={(item) => addItem({item}, 1)}
                />
            ))}
        </div>
    );
};

export default ItemList;
