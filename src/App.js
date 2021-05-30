
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemList/ItemList';
import ProductDetail from './components/ProductDetail/ProductDetail'
import { getProducts } from './services/products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import  {Inicio}  from './components/Inicio/Inicio';
import { Cart } from './components/Cart/Cart'; 
import {CartProvider} from './Context/CartContext';







function App() {
  const products = getProducts();
  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  const search = (searchValue) => {
    console.log(searchValue);
  };



  return (
    <div className="App">
      
      <Router>
      <CartProvider> 
        <Navbar />
        <Switch>
        <Route exact path='/'>
              <Inicio />
            </Route>
          <Route path="/products/:id">
     
            <ProductDetail />
          </Route>
          <Route path="/products">
           
            <ItemListContainer products={filteredProducts} />
          </Route>
          <Route path="/">
            <Redirect to="/products" />
          </Route>
         
         
            <Route path='/cart'>
            </Route>
         
        </Switch>
        </CartProvider>
      </Router>
         
    </div>
  );
}

export default App;
