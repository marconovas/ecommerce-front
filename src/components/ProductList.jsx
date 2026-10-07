import ProductCard from "./ProductCard";

function ProductList({ products, setCartItems }) {
    return(
        <div className="container">
            <h2>Products</h2>

            <div className="row">
                {products.map(product => (
                    <div className="col-12 col-md-6 col-lg-4 m-2" key={product.id}>
                        <ProductCard
                         product={product}
                          setCartItems={setCartItems}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;