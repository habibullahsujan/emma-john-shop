import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeItemFromLocalStorage } from "../LocalStorage/LocalStorage";
import OrderedProduct from "../OrderedProduct/OrderedProduct";
import OrderSummary from "../Products/OrderSummary/OrderSummary";
import "./Order.css";

const Order = () => {
  const { savedProducts } = useLoaderData();

  const [product, setProduct] = useState(savedProducts);

  const removeItem = (id) => {
    const remaining=product.filter(item=> item.id !== id);
    setProduct(remaining);
    removeItemFromLocalStorage(id);

  };

  return (
    <div className="order">
      <div className="cart-product">
        {product.map((singleItem) => (
          <OrderedProduct
            singleItem={singleItem}
            key={singleItem.id}
            removeItem={removeItem}
          ></OrderedProduct>
        ))}
        {
          product.length === 0 && <h4>You Have nothing in shopping cart. Add some items cart first. Go Shop: <Link style={{color:'blue'}} to={'/'}>shop</Link></h4>
        }
      </div>
      <div className="order-summary">
        <OrderSummary product={product}></OrderSummary>
      </div>
    </div>
  );
};

export default Order;
