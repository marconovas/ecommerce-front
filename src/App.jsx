import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar
        title="Mi E-commerce"
        cartItems={cartItems}
      />

      <Routes>
        <Route path="/" element={<Home />}/>

        <Route 
          path="/products" 
          element={
            <Products
              setCartItems={setCartItems}
            />
          }
        />

        <Route 
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems} 
            />
          }
        />
      </Routes>
     
    </>
  )
}

export default App;