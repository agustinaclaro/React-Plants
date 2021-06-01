
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Navbar from './components/navbar/navbar';
import ItemList from './components/ItemList/ItemList';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import ProductDetail from './components/ProductDetail/ProductDetail';
import {useState} from 'react'
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
            <ItemList products={filteredProducts} />
          </Route>
          <Route path="/">
            <Redirect to="/products" />
          </Route>
         
         
            <Route path='/cart'>
              <Cart/>
            </Route>

            <Route path='/category/:categoryId'>
            <ItemListContainer data={data}/>
          </Route>
         
        </Switch>
        </CartProvider>
      </Router>
         
    </div>
  );
}

export default App;
