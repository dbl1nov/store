import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1440px] w-full mx-auto p-3 flex items-center justify-between">
        <div>
          <a href="/">
            <img src="/images/3legant.svg" alt="logo" />
          </a>
        </div>
        <div className="flex gap-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Shop</Link>
          <Link to={"/profile"}>Product</Link>
          <Link to={"/profile"}>Contact Us</Link>
        </div>
        <div className="flex items-center gap-4">
          <img src="/images/search.svg" alt="search" />
          <img src="/images/user.svg" alt="user" />
          <img src="/images/cart.svg" alt="cart" />
        </div>
      </div>
    </header>
  );
}
