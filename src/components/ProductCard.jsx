
function ProductCard({ product, setCartItems }) {
    return(
        <div className="card bg-secondary text-light">

            <div className="card-body">

                <h4 className="card-title">
                    {product.name}
                </h4>

                <p className="card-text">
                    ${product.price}
                </p>

                <button
                    className="btn btn-primary"
                    onClick={() => setCartItems(prev =>{
                    const itemfound = prev.find(item => item.id === product.id);
                    
                    if(!itemfound) {
                        return [
                            ...prev, 
                            {
                                ...product,
                                quantity: 1
                            }
                        ]
                    }

                    return prev.map(item => 
                        item.id === product.id 
                        ? {...item, quantity: item.quantity + 1}
                        : item
                    )
                })}>   
                Add to Cart
                </button>

            </div>
        </div>
    );
}

export default ProductCard;