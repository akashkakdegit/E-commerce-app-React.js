import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = ({ searchByCategory }) => {
  const cartItem = useSelector((store) => store.cart.items)|| [];
  const totalItems = cartItem.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  const [searchItem, setSearchItem] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchItem(inputValue);
    if (inputValue === "") {
      searchByCategory("");
    }
  };

  const handleSearch = () => {
    searchByCategory(searchItem);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="menu-bar">
          <IoMenu
            onClick={() => {
              toggleShowMenu();
              setShowSearch(false);
            }}
            size={"24px"}
            data-testid={'menu-button'}
          />
          {showMenu ? (
            <div className="menu-list">
              <Link to="/" onClick={() => setShowMenu(false)}>
                Shop
              </Link>
              <Link to="/" onClick={() => setShowMenu(false)}>
                On Sale
              </Link>
              <Link to="/" onClick={() => setShowMenu(false)}>
                New Arrivals
              </Link>
              <Link to="/" onClick={() => setShowMenu(false)}>
                Brands
              </Link>
            </div>
          ) : null}
        </li>
        <li>
          <Link
            to="/"
            className="shop-name"
            onClick={() => {
              setShowSearch(false);
              setShowMenu(false);
            }}
          >
            SHOP.CO
          </Link>
        </li>
        <div className="nav-list">
          <li>
            <Link to="/">Shop</Link>
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
            data-testid={'search-icon'}
          />
        </div>
        <div className="search-container-mobile-view">
          <IoSearch
            className="search-icon-mobile-view"
            size="21px"
            onClick={() => {
              toggleShowSearch();
              setShowMenu(false);
            }}
          />
          {showSearch ? (
            <div className="mobile-search-container">
              <input
                placeholder="Search for products..."
                className="mobile-view-search"
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <IoSearch
                className="input-search-icon"
                size="16px"
                onClick={handleSearch}
              />
            </div>
          ) : null}
        </div>
        <div className="right-icons">
          <Link to="/cart" className="cart-icon">
            <FiShoppingCart
              size="24px"
              data-testid={"cart-button"}
              onClick={() => {
                setShowMenu(false);
                setShowSearch(false);
              }}
            />
            <text className="totalItems">{totalItems}</text>
          </Link>
          <FaRegUserCircle size="24px" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
