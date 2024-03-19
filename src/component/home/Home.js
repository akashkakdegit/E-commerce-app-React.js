import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ImageComponent from "../../common/image/ImageComponent";

const Home = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  console.log(products);

  return (
    <>
      <div className="home-container">
        <text className="heading">NEW ARRIVALS</text>
        <div className="shop-products-container">
          {products
            .slice(0, showAll ? products.length : 12)
            .map((product, index) => (
              <div className="product-card" key={index}>
                <Link
                  to={`/products/${product.id}`}
                  className="image-container"
                >
                  <ImageComponent src={product.image} alt={product.title} className="product-image"/>
                </Link>
                <text className="product-title" data-testid={'title'}>{product.title}</text>
                <text className="product-rating">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </text>
                <text className="product-price">${product.price}</text>
              </div>
            ))}
        </div>
        <div className="view-all-button-container">
          <button onClick={toggleShowAll} className="view-all-button">
            {showAll ? "Show less" : "View all"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
