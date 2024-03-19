import React from "react";
import "./Cart.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice";
import { RiDeleteBinFill } from "react-icons/ri";
import QuantityControl from "../utils/QuantityControl";
import { Link } from "react-router-dom";
import ImageComponent from "../../common/image/ImageComponent";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem.length);
  const subtTotal = cartItem.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  );
  const discount = subtTotal * 0.2;
  const total = subtTotal - discount + 15;

  return (
    <>
      {cartItem.length !== 0 ? (
        <div className="cart-main-container">
          <hr className="divider" />
          <div className="main-container">
            <div>
              <div className="cart-detail-title">
                <text>YOUR CART</text>
              </div>
              <div className="cart-container">
                <div className="cart-item-container">
                  {cartItem.map((item, index) => (
                    <div>
                      <div className="cart-items" key={item?.id}>
                        <div className="cart-items-image-container">
                          <ImageComponent src={item?.image} alt={item?.title}  className="cart-items-image"/>
                        </div>
                        <div>
                          <div className="cart-items-text-container">
                            <span>
                              <text className="cart-items-text">
                                {item?.title}
                              </text>
                            </span>
                            <span className="remove-all">
                              <RiDeleteBinFill
                                size={"20px"}
                                onClick={() => dispatch(removeItem(item?.id))}
                              />
                            </span>
                          </div>
                          <div className="items-rating-category">
                            Rating:
                            <span className="span">
                              {item?.rating?.rate} ({item?.rating?.count}{" "}
                              reviews)
                            </span>
                          </div>
                          <text className="items-rating-category">
                            Category:
                            <span className="span">{item?.category}</span>
                          </text>
                          <div className="items-price-details">
                            <p className="items-price">
                              ${item.price.toFixed(2) * item.quantity}
                            </p>
                            <QuantityControl
                              count={item.quantity}
                              itemId={item.id}
                            />
                          </div>
                        </div>
                      </div>
                      {index !== cartItem.length - 1 && (
                        <hr className="items-devider" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="order-summary-container">
                  <text className="order-summary">Order Summary</text>
                  <div className="price-container">
                    <div className="order-details">
                      <text className="price-details">Subtotal</text>
                      <text className="price">${subtTotal.toFixed(2)}</text>
                    </div>
                    <div className="order-details">
                      <text className="price-details">Discount(20%)</text>
                      <text className="discount">${discount.toFixed(2)}</text>
                    </div>
                    <div className="order-details">
                      <text className="price-details">Delivery Fee</text>
                      <text className="price">${15}</text>
                    </div>
                    <hr className="devider" />
                    <div className="order-details">
                      <text className="total">Total</text>
                      <text className="total-price">${total.toFixed(2)}</text>
                    </div>
                  </div>
                  <div className="cart-checkout-button-container">
                    <button className="cart-checkout-button">
                      Go to Checkout <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart ">
          <text className="empty-cart-text">Your Cart is empty</text>
          <img
            className="empty-cart-image"
            src="./Assets/empty-cart.jpg"
            alt="empty cart"
          />
          <Link to="/">
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
