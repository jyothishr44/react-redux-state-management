import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Products</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Product;
