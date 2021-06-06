
import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';
import Navbar from './components/navbar/navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { useState } from 'react'
import { getProductCategoryId, getProducts } from './services/products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import { Inicio } from './components/Inicio/Inicio';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TitleFront from './components/TitleFront/TitleFront';
import Footer from './components/Footer/footer';







function App() {
  const products = getProducts();
  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  return (
    <div className="App">

      <Router>
        <CartProvider>
          <Navbar />
          <TitleFront/>
          <Switch>
            <Route exact path='/'>
              <Inicio />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path="/products/:id">
              <ProductDetail />
            </Route>
            <Route path="/products">
              <ItemListContainer />
            </Route>

          </Switch>
          <Footer/>
        </CartProvider>
      </Router>

    </div>
  );
}

export default App;
