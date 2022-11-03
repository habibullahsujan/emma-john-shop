import React from "react";
import { Link} from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = (props) => {
  const {children}=props

  
  const products=props.product;       
  let price =0;
  let shippingCharge=0;
  let quantity=0;
  for(const product of products){
    quantity= quantity + product.quantity;
    price= price + product.price * product.quantity;
    shippingCharge= shippingCharge + product.shipping * product.quantity;
  }
  const tax=parseFloat((price * 0.1).toFixed(2)) ;
  const grandTotal=price + shippingCharge + tax;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <hr />
      <div className="order-details">
        <p>Selected Items:{quantity}</p>
        <p>Total Price:{price}</p>
        <p>Total Shipping Charge:{shippingCharge}</p>
        <p>Tax:{tax}</p>
        <h5>Grand Total:{grandTotal}</h5>
      </div>
      <hr />
      <div className="order-div-btn">
        <button onClick={props.clearCart} className="clear-cart-btn">Clear Cart</button>
        <Link to={'/orders'}><button to className="review-order-btn">Review Order</button></Link>
        {children}
        
      </div>
    </div>
  );
};

export default OrderSummary;
