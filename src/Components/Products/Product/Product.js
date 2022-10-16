import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;


  return (
    <div className="single-product">
      <div className="shoe">
        <img
          className="product-img"
          src={img}
          alt=""
        />
        <div className="product-details">
          <h4>{name}</h4>
          <div>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Ratings:{ratings}</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={()=>props.addToCart(props.product)} className="add-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
