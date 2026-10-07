import { Link } from "react-router-dom"

function NavBar({ title, cartItems }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <h2 className="navbar-brand text-light">
          {title}
        </h2>

        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link text-light" to="/products">
              Products
            </Link>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Categories
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              My Account
            </a>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link text-light" to="/cart">
              Shopping Cart
              <span className="badge bg-primary ms-2">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar