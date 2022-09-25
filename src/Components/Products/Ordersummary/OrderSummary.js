import React from "react";
import "./OrderSummary.css";

const OrderSummary = (props) => {

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <hr />
      <div className="order-details">
        <p>Selected Items:{props.product.length}</p>
        <p>Total Price:</p>
        <p>Total Shipping Charge:</p>
        <p>Tax:</p>
        <h5>Grand Total:</h5>
      </div>
      <hr />
      <div className="order-div-btn">
        <button className="clear-cart-btn">Clear Cart</button>
        <button className="review-order-btn">Review Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
