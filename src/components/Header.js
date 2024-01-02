import React from "react";
import { Link } from "react-router-dom";
import './Header/Header.css'

const Header = () => {
  const user = {
    name: "Rohit",
  };

  const cart = {
    totalCount: 10,
  };

  const logout = () => {};

  return(
    <header className="header">
    <div className="main_header">
    <Link to="/" className="logo">
          Food App!
    </Link> 
       <nav>
           <ul>
              {user ? (
                <li className="menu_container">
                  <Link to="/profile">{user.name}</Link>
                  <div className="menu">
                  <Link to="/profile"> profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                 </div>
                </li>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <li>
            <Link to="/cart">
                Cart
                {cart.totalCount > 0 && <span className="cart_count">{cart.totalCount}</span>}
            </Link>
        </li>
      </ul>
    </nav>
    </div>
    </header>
  )
}
export default Header;
