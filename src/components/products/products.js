import './products.scss'

export const Product = (props)=>{
    const productClicked = () =>
    alert(`Buena eleccion ${pops.title}`) 
    return(
    <div onClick = {productClicked}>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
    </div> 
    )
}

