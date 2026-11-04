import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import apiFetch from "../services/api";

const API_URL = "http://localhost:3000/products";


function Products({ setCartItems }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try{
                const res = await apiFetch({
                    url: API_URL, 
                    request: {
                        method: "GET"
                    }
                });

                setProducts(res.data);
            } catch(error) {
                console.log(error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return(
        isLoading ? (
            <h2>Loading...</h2>
        ) : error ? (
            <h2>Something failed</h2>
        ) : (
            <ProductList 
                products={products}
                setCartItems={setCartItems}
            />
        )
    );
}

export default Products;