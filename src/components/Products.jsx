import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addToCart())}>Add to Cart</button>
      <button
        style={{ margin: "1px" }}
        onClick={() => dispatch(removeFromCart())}
      >
        Remove from Cart
      </button>
    </>
  );
};

export default Products;
