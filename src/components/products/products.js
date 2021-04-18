import './products.scss'

export const Products = (props)=> (
    const productClick = ()=> (
        alert( `compra ${props.title} que es tu planta ideal` ) )
    return(
    <div onClick ={ productClick}>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
    </div>
)
)