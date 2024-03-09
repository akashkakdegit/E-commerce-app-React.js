import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import Footer from "./component/footer/Footer";
import Product from "./component/productsDetails/Products";
import { Provider } from "react-redux";
import appStore from "./component/store/appStore";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error.message);
      return null;
    }
  }

  const searchByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Provider store={appStore}>
      <Router>
        <Header />
        <Navbar searchByCategory={searchByCategory} />
        <Routes>
          <Route
            path="/"
            element={
              <Home products={selectedCategory ? filteredProducts : products} />
            }
          />
          <Route
            path="/products/:id"
            element={
              <Product
                products={selectedCategory ? filteredProducts : products}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
