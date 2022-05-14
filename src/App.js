
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar/navbar';
import ContainerProductDetail from './components/ContainerProductDetail/containerPd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Inicio } from './components/Inicio/inicio';
import { CartProvider } from './Context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/nosotros/nosotros';
import Footer from './components/Footer/footer';
import {OrderBuy} from './components/Order/order'
import { CartContainer } from './components/CartContainer/CartContainer';
import {Error} from './components/Error/error'

function App() {

  
 
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Inicio/>
            </Route>
            <Route path="/cartCheckout" component={OrderBuy} />
            <Route path='/cart'>
              <CartContainer />
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path="/products/:id">
              <ContainerProductDetail />
            </Route>
            <Route path="/products">
              <ItemListContainer />
            </Route>
            <Route  path="/nosotros">
              <Nosotros/>
            </Route>
            <Route component={Error}>
            </Route>
          

          </Switch>
          <Footer/>
        </CartProvider>
      </Router>

    </div>
  );
}

export default App;
