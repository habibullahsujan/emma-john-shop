import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OrderedProduct.css";

const OrderedProduct = ({ singleItem, removeItem }) => {
  const {id, name, img, price, quantity, shipping} = singleItem;
  return (
    <div className="ordered-product">
      <div>
        <img className="ordered-product-img" src={img} alt="" />
      </div>
      <div className="details-product">
        <div>
          <p>{name}</p>
          <p>Price:${price}</p>
          <p>Quantity:{quantity}</p>
          <p>Shipping:${shipping}</p>
        </div>
        <div>
            <button onClick={()=>removeItem(id)} className="delete-btn">
            <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default OrderedProduct;
