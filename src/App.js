import './App.css';
import Header from './common/header/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/cart/Cart';
import { useState } from 'react';
import Sdata from './components/shop/Sdata';
import Footer from './common/footer/footer';

function App() {
  // 1 fetch data from Data.js
  const { productItems } = Data;
  const { shopItems } = Sdata;
  //Step 2 :
  const [cartItem, setCartItem] = useState([])


  //Step 4 :
  const addToCart = (product) => {

    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    // searches through cartItem to find an item with the same id as product
    const productExit = cartItem.find((item) => item.id === product.id)

    // If the quantity of productExit is one, this line removes the product from the cart.
    // It does this by filtering out any item whose id matches the product.id,
    //thereby removing it from the cartItem array.
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }
    // If the quantity of productExit is greater than one,
    //this line creates a new array where the matching product's quantity is decreased by one.
    //It uses map to iterate through cartItem and updates the qty of the matching item by subtracting one.
    //If the id doesn't match, it leaves the item unchanged.
    else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const [MobileState, setMobileState] = useState(false);
  const toggleMobile = () => {
    setMobileState(!MobileState);
  }
  return (
    <>
      <BrowserRouter>
        <Header cartItem={cartItem} toggleMobile={toggleMobile} />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} MobileState={MobileState} />}>
          </Route>

          <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
