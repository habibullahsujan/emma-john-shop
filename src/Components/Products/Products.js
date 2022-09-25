import React, { useEffect, useState } from "react";
import OrderSummary from "./Ordersummary/OrderSummary";
import Product from "./Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct]=useState([])
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart=(products)=>{

    const newListOfItems=[...product, products]
    setProduct(newListOfItems)
  }



  return (
    <div className="products">
      <div className="product">
        {products.map((product) => (
          <Product product={product} addToCart={addToCart} key={product.id}></Product>
        ))}
      </div>
      <div className="order-summary">
        <OrderSummary product={product}></OrderSummary>
      </div>
    </div>
  );
};

export default Products;
