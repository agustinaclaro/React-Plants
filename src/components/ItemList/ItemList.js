
import Item from '../Item/Item';
import './ItemList.scss';
import { useHistory, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext'
import { getFirestore } from '../../firebase';

const ItemList = ({ products = [] }) => {
   
    const { addItem } = useContext(CartContext)
    const [product, setProduct]= useStaete([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const db=getFirestore
        const ItemColection= db.colection('products')
        ItemColection.get().then(
            (querySnapshot)=>{
                if(querySnapshot.size =0){

                }
            }
        )

    },[])

    useEffect(() => {
        setIsLoading(true)
        const db= getFirestore()
        const itemCollection = db.collection("items")
        itemCollection.get().then((querySnapshot) => {
                if (querySnapshot === 0) {
                    console.log('No results')
                }
        setItems(getCategoryId(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()}))))  
        }).catch((error)=>{
            console.log('Error',error)
        }).finally(()=> setIsLoading(false))
        
    }, [categoryId])




    return (
        <div className="cards-group">
            {products.map((product) => (
                <Item
                    key={product.id}
                    title={product.title}
                    price = {product.price}
                    imgUrl={product.imgUrl}
                    onImageClick={() => (`/products/${product.id}`)}
                    onAddtoCart={() => addItem(product, 1)}
                />
            ))}
        </div>
    );
};

export default ItemList;
