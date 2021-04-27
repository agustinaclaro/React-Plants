import {Cards} from '../products-card/products'
import './list.scss'

export const List = (props) =>{
    return props.products.map ((product)=> (
            <Cards
            title= {product.title}
            price= {product.price}
            imgUrl ={product.imgUrl}
            />

    ));
}

