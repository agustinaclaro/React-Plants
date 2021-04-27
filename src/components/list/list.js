
import { Cards } from '../products-card/products';

export const List = (props) => 
     props.products.map((product) => (
            <Cards
            title= {product.title}
            price= {product.price}
            imgUrl ={product.imgUrl}
            />

    ));


