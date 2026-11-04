import { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";


function App() {
  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem("cart");

    return items ? JSON.parse(items) : []
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems])

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

        <Route 
          path="/login"
          element={
            <Login
            />
          }
        />
      </Routes>
     
    </>
  )
}

export default App;