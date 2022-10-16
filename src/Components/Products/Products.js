import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  addCartLocalStorage,
  getCartFromLocalStorage,
} from "../LocalStorage/LocalStorage";
import OrderSummary from "./OrderSummary/OrderSummary";
import Product from "./Product/Product";
import "./Products.css";

const Products = () => {
  const {products}=useLoaderData();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const existCart = getCartFromLocalStorage();
    const savedCart = [];

    for (const id in existCart) {
      const productInLocalStorage = products.find(
        (product) => product.id === id
      );
      if (productInLocalStorage) {
        const quantity = existCart[id];
        productInLocalStorage.quantity = quantity;
        savedCart.push(productInLocalStorage);
      }
    }
    setProduct(savedCart);
  }, [products]);

  const addToCart = (selectedProducts) => {
    const existedProduct=products.find(insideProduct=> insideProduct.id === selectedProducts.id);
    let newListOfItems=[];
    if(!existedProduct){
      selectedProducts.quantity=1;
      newListOfItems = [...products, existedProduct];
    }
    else{
      const rest=products.filter(restProduct=> restProduct.id !== selectedProducts.id);
      existedProduct.quantity+= 1;
      newListOfItems=[...rest, existedProduct]
    }
    setProduct(newListOfItems);
    addCartLocalStorage(selectedProducts.id);
  };

  const clearCart = () => {
    setProduct([]);
    localStorage.removeItem('shopping-cart')
  };

  return (
    <div className="products">
      <div className="product">
        {products.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <OrderSummary product={product} clearCart={clearCart}></OrderSummary>
      </div>
    </div>
  );
};

export default Products;
