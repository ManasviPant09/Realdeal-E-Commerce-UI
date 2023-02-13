import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import ContinueShopping from './Pages/ContinueShopping';
import WelcomeBack from './Pages/WelcomeBack';
import { selectUser } from './redux/userSlice';
import { useSelector } from 'react-redux';
import { authUser } from './redux/authSlice';

const App = () => {
  const user = useSelector(selectUser);
  const auth = useSelector(authUser);
  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/" element = {<Home />}>
      </Route >
      <Route path="/product" element={<Product />}>
      </Route>
      <Route path="/productlist" element={<ProductList />}>
      </Route>
      <Route path="/login" element = {
       auth ? (<Navigate to = {"/welcomeback"} />) : (<Login/>)
       }>
      </Route>
      <Route path="/register" element = {
        user ? (<Navigate to = {"/continueshopping"} />) : (<Register/>)
        }>
      </Route>
      <Route path="/shoppingcart" element={<Cart />}>
      </Route>
      <Route path="/continueshopping" element={<ContinueShopping />}>
      </Route>
      <Route path="/welcomeback" element={<WelcomeBack />}>
      </Route>
    </Routes>
    </Router>
    </>
    );
}
export default App;