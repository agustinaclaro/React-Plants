
import './App.scss';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail'
import { useEffect, useState } from 'react';
import { getProducts } from './services/products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import  {Inicio}  from './components/Inicio/Inicio';
import TitleProcutDetail from './components/TitleProductDetail/TitleProductDetail';
import TitleFont from './components/TitleFront/TitleFront';





function App() {
  const products = getProducts();
  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  const search = (searchValue) => {
    console.log(searchValue);
  };

 <input type='text' placeholder='buscar' value={filter} onChange={(e) => search(e.target.value)} />

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/products/:id">
          <TitleProcutDetail/>
            <ProductDetail />
          </Route>
          <Route path="/products">
            <TitleFont/>
            <ItemListContainer products={filteredProducts} />
          </Route>
          <Route path="/">
            <Redirect to="/products" />
          </Route>
          <Route path="/Inicio">
            <Inicio/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
