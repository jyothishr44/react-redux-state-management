import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <nav>
      <h2>My Shop </h2>
      <p>Cart : {cartCount}</p>
    </nav>
  );
};

export default Navbar;
