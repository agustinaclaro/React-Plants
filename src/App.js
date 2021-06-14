
import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';
import Navbar from './components/navbar/navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Inicio } from './components/Inicio/Inicio';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TitleFront from './components/TitleFront/TitleFront';
import Footer from './components/Footer/footer';
import {OrderBuy} from './components/Order/order'
import { CartContainer } from './components/CartContainer/CartContainer';







function App() {
 
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
            <Route path="/cartCheckout" component={OrderBuy} />
            <Route path='/cart'>
              <CartContainer />
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
