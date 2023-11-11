/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "../../../../public/assets/img/logo-saye.png";


export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const iconStyle = {
    fontSize: "24px",
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-top">
        <div className="content-top">
          <p>Welcome Saye Printer Online Store</p>
          <p>
            <i className="fa fa-phone"></i>
          </p>
          <p>Chat Us: 0856-400-90173</p>
        </div>
        <div
          className="link-top"
          onClick={() => {
            setIsActiveUser(!isActiveUser);
          }}>
          <i className="fa fa-user"></i>
          <i className="fa fa-chevron-down"></i>
        </div>
        <div className={isActiveUser ? "link-user active" : "link-user"}>
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <a href="">
            <img src={logo} alt="logo-app" />
          </a>
        </div>
        <div className={isActive ? "navbar-link active" : "navbar-link"}>
          <div className="back" onClick={() => setIsActive(!isActive)}>
            <p>
              <i className="fa fa-times icon-back"></i>
            </p>
          </div>
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">Galery</a>
          <a href="">Store</a>
          <a href="">Login/Register</a>
        </div>
        <div className="navbar-extra">
          <div className="search">
            <input type="text" />
            <button className="btn-search">
              <i className="fa fa-search icon-search" style={iconStyle}></i>
            </button>
          </div>
          <button className="bell">
            <i className="fa fa-bell icon-bell" style={iconStyle}></i>
          </button>
          <button className="card-shop">
            <i className="fa fa-shopping-cart icon-shop" style={iconStyle}></i>
          </button>
          <button className="menu" onClick={() => setIsActive(!isActive)}>
            <i className="fa fa-bars icon-menu" style={iconStyle}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

