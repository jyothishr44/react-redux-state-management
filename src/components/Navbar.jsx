import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.cartCount);

  return (
    <>
      <h1>This is a Navbar</h1>
      <h3>Cart Count: {count}</h3>
    </>
  );
};

export default Navbar;
