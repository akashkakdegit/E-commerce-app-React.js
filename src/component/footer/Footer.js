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
        <div className="section-1">
          <div className="heading">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </div>
          <div className="subscribe">
            <input className="email" placeholder="Enter your email address" />
            <button className="button">Subscribe to Newsletter</button>
          </div>
        </div>
        <div className="section-2-container">
          <div className="section-2">
            <div className="footer-section-2">
              <text className="logo">SHOP.CO</text>
              <text className="text">
                We have clothes that suits your style and <br /> which you’re
                proud to wear. <br />
                From women to men.
              </text>
              <div className="icons">
                <AiFillTwitterCircle size="28px" />
                <FaFacebook size="28px" />
                <AiFillInstagram size="28px" />
                <FaGithub size="28px" />
              </div>
            </div>
            <div className="footer-section-2">
              <text className="footer-section-2-title">COMPANY</text>
              <a href="name1" className="sub-title">
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
          {/* <hr
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            borderColor: "black",
          }} 
        />*/}
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
