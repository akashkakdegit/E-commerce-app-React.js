import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="section-1">
            <text className="heading">
              STAY UPTO DATE ABOUT <br className="line-break" /> OUR LATEST
              OFFERS
            </text>
            <div className="subscribe">
              <input className="email" placeholder="Enter your email address" />
              <button className="button" data-testid={'subscribe-button'}>Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
        <div className="section-2-container">
          <div className="section-2">
            <div className="footer-shop-section">
              <div className="footer-section-2">
                <text className="logo">SHOP.CO</text>
                <text className="text">
                  We have clothes that suits your style and
                  <br className="line-break" /> which youre proud to wear.
                  <br className="line-break" />
                  From women to men.
                </text>
                <div className="icons">
                  <AiFillTwitterCircle size="28px" data-testid={'twitter-icon'} />
                  <FaFacebook size="28px" data-testid={'facebook-icon'} />
                  <AiFillInstagram size="28px" data-testid={'instagram-icon'}/>
                  <FaGithub size="28px" data-testid={'github-icon'} />
                </div>
              </div>
            </div>
            <div className="footer-section-2">
              <text className="footer-section-2-title">COMPANY</text>
              <a href="name1" className="sub-title" data-testid={'about'}>
                About
              </a>
              <a href="name1" className="sub-title">
                Features
              </a>
              <a href="name1" className="sub-title">
                Works
              </a>
              <a href="name1" className="sub-title">
                Career
              </a>
            </div>
            <div className="footer-section-2">
              <text className="footer-section-2-title">HELP</text>
              <a href="name2" className="sub-title">
                Customer Support
              </a>
              <a href="name2" className="sub-title">
                Delivery Details
              </a>
              <a href="name2" className="sub-title">
                Terms & Condition
              </a>
              <a href="name2" className="sub-title">
                Privacy Policy
              </a>
            </div>
            <div className="footer-section-2">
              <text className="footer-section-2-title">FAQ</text>
              <a href="name3" className="sub-title">
                Account
              </a>
              <a href="name3" className="sub-title">
                Manage Delivery
              </a>
              <a href="name3" className="sub-title">
                Orders
              </a>
              <a href="name3" className="sub-title">
                Payments
              </a>
            </div>
            <div className="footer-section-2">
              <text className="footer-section-2-title">RESOURCES</text>
              <a href="name4" className="sub-title">
                Free eBooks
              </a>
              <a href="name4" className="sub-title">
                Developement Tutorials
              </a>
              <a href="name4" className="sub-title">
                How to Blog
              </a>
              <a href="name4" className="sub-title">
                Youtube Playlist
              </a>
            </div>
          </div>
          <hr className="devider" />
          <div className="bottom-section">
            <text className="text">© 2000-2021, All rights reserved</text>
            <div className="payment-options">
              <span className="payment-methods">
                <img src="./Assets/visa.svg" alt="visa" />
              </span>
              <span className="payment-methods">
                <img src="./Assets/mastercard.svg" alt="mastercard" />
              </span>
              <span className="payment-methods">
                <img src="./Assets/paypal.svg" alt="paypal" />
              </span>
              <span className="payment-methods">
                <img src="./Assets/apple-pay.svg" alt="apple" />
              </span>
              <span className="payment-methods">
                <img src="./Assets/gpay.svg" alt="gpay" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;