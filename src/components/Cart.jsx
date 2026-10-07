
function Cart({cartItems, setCartItems}) {
    const formatter = new Intl.NumberFormat("es-AR");

    return(
        <div className="container mt-5">
            <h2 className="mb-4">Cart</h2>

            {   
                cartItems.length === 0 ? (
                    <div className="alert alert-info">
                        The cart is empty.    
                    </div>
                ) : (
                    cartItems.map(item => (
                        <div className="card bg-secondary text-light mb-3" key={item.id}>
                            <div className="card-body">
    
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">Price: ${formatter.format(item.price)}</p>
                                <p className="card-text">Quantity: 
                                    {item.quantity}
                                    <button className="btn btn-primary" onClick={() => setCartItems(prev => 
                                        prev.map(product => 
                                            product.id === item.id
                                            ?   {...product, quantity: product.quantity + 1 }
                                            : product
                                        )
                                    )}>
                                        +
                                    </button>
    
                                    <button className="btn btn-primary" onClick={() => setCartItems(prev => 
                                        prev.map(product => 
                                            product.id === item.id 
                                            ? {...product, quantity: product.quantity - 1 }
                                            : product
                                        ).filter(product => 
                                            product.quantity > 0
                                        )
                                    )}>
                                        -
                                    </button>
                                </p>
    
                                <p className="card-text">
                                    Sub Total:
                                    ${formatter.format(item.quantity * item.price)}    
                                </p>
                            </div>
                        </div>
                    ))
                )
            }
            
            {cartItems.length > 0 && (
                <h4 className="mt-4">
                    Total:
                    $
                    {
                        formatter.format(
                            cartItems.reduce((total, product) => {
                                return total + product.price * product.quantity
                            }, 0)
                        )
                    }
                </h4>
            )}

        </div>
    )
}

export default Cart;