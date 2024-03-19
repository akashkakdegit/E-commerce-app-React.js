import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import "./Products.css";
import ImageComponent from "../../common/image/ImageComponent";

const Products = ({ products }) => {
  const { id } = useParams();
  const [counter, setCounter] = useState(1);
  const prod = products.find((prdt) => prdt.id === parseInt(id, 10));

  const dispatch = useDispatch();
  if (!prod) {
    return <p>Product not found</p>;
  }
  const increment = () => {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const handleAddItem = () => {
    const itemToAdd = { ...prod, quantity: counter };
    dispatch(addItem(itemToAdd));
  };
  return (
    <>
      <div className="products-main-container">
        <hr className="divider" />
        <div className="products-container">
          <div className="image-containers">
            <ImageComponent src={prod.image} alt={prod.title} className="product-images" />
          </div>
          <div className="product-details">
            <text className="title">{prod.title}</text>

            <text className="product-rating">
              Rating: {prod.rating.rate} ({prod.rating.count} reviews)
            </text>
            <text className="products-price">
              ${prod.price.toFixed(2) * counter}
            </text>
            <div className="button-container">
              <div className="cart-add-remove-button">
                <IoMdRemove size={"24px"} onClick={decrement} />
                <text>{counter} </text>
                <IoMdAdd size={"24px"} onClick={increment} />
              </div>
              <button className="cart-button" onClick={handleAddItem}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
