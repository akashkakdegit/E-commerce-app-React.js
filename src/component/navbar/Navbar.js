import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = ({ searchByCategory }) => {
  const cartItem = useSelector((store) => store.cart.items);
  const totalItems = cartItem.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSearch = () => {
    searchByCategory(searchItem);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="shop-name" onClick={handleSearch}>
            SHOP.CO
          </Link>
        </li>
        <div className="nav-list">
          <li>
            <Link to="/" onClick={handleSearch}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact">On Sale</Link>
          </li>
          <li>
            <Link to="/contact">New Arrivals</Link>
          </li>
          <li>
            <Link to="/contact">Brands</Link>
          </li>
        </div>
        <div className="search-container">
          <input
            placeholder="Search for products..."
            className="search"
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <IoSearch
            className="search-icon"
            size="21px"
            onClick={handleSearch}
          />
        </div>
        <div className="right-icons">
          <Link to="/cart" className="cart-icon">
            <FiShoppingCart size="24px" />
            <text className="totalItems">{totalItems}</text>
          </Link>
          <FaRegUserCircle size="24px" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
