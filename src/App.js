
import './App.scss';
import Navbar from './components/navbar/navbar';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetail from './components/ProductDetail/ProductDetail'
import { useEffect, useState } from 'react';
import { getProducts } from './services/products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import  Inicio  from './components/Inicio/Inicio';
import TitleProcutDetail from './components/TitleProductDetail/TitleProductDetail';
import TitleFont from './components/TitleFront/Ttlefront';



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
            <ProductsList products={filteredProducts} />
          </Route>
          <Route path="/">
            <Inicio/>
            <Redirect to="/products" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
