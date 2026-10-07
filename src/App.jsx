import { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const API_URL = "http://localhost:3000/products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try{
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        
        setProducts(data.data);

      } catch(error) {

        console.log(error);
        setError(true);

      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar
        title="Mi E-commerce"
        cartItems={cartItems}
      />

      {isLoading ? 
        <span>Loading...</span>
      : error ? (
        <span>Something Failed!</span>
      ) 
      : (
        <ProductList 
          products={products} 
          setCartItems={setCartItems}
        />
      )}

      <Cart  cartItems={cartItems} setCartItems={setCartItems}/>
    </>
  )
}

export default App;