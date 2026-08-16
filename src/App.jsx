import React from "react";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Counter from "./components/Counter";
import Navbar1 from "./redux_toolkit/Navbar.jsx";
import Product1 from "./redux_toolkit/Product.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Products />
      <hr />
      {/* Using Redux-Toolkit */}
      <Navbar1 />
      <Product1 />
    </>
  );
};

export default App;
