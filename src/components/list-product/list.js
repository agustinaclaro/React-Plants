import './list.scss';
import {Cards} from '../products-card/products';

export const List = (props) =>{
    return props.products.map ((product)=> (
            <Cards
            title= {product.title}
            price= {product.price}
            imgUrl ={product.imgUrl}
            />

    ));
}

