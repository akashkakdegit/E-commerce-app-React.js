import {useState} from "react";
import "./Home.css";
import { Link} from "react-router-dom";

const Home = ({products}) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  console.log(products)

  return (
    <>
      <div className="home-container">
       
          <text className="heading">NEW ARRIVALS</text>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-evenly",
            }}
          >
            {products
            .slice(0, showAll ? products.length : 12)
            .map((product, index) => (
              <div className="product-card" key={index}>
                <Link to={`/products/${product.id}`} className="image-container" >
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                </Link>
                <div className="product-title">{product.title}</div>
                <div className="product-rating">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </div>
                <div className="product-price">${product.price}</div>
              </div>
            ))}
          </div>
          <div  style={{
            display: "flex",
            justifyContent: "center",
            marginTop:'36px'
          }}>
          <button
            style={{
              height: "52px",
              width: "218px",
              border: "1px solid #0000001A",
              background:'none',
              borderRadius: "62px",
              fontSize: "16px",
              fontWeight: '500',
              lineHeight: "22px",
            }}
            onClick={toggleShowAll}
          >
            {showAll ? "Show less" : "View all"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
