const addCartLocalStorage = (id) => {
  let productCart = {};
  const existCart = localStorage.getItem("shopping-cart");
  if (existCart) {
    const convert = JSON.parse(existCart);
    productCart = convert;
  }

  const existItem = productCart[id];

  if (existItem) {
    //here we set the value of exist item
    const newQuantity = parseInt(existItem) + 1;
    productCart[id] = newQuantity;
  } else {
    productCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(productCart));
};

const getCartFromLocalStorage = () => {
  let productCart = {};
  const existCart = localStorage.getItem("shopping-cart");
  if (existCart) {
    const convert = JSON.parse(existCart);
    productCart = convert;
  }
  return productCart;
};

const removeItemFromLocalStorage=(id)=>{
  const savedItems=JSON.parse(localStorage.getItem('shopping-cart'));
  if(savedItems){
    if(id in savedItems){
      delete savedItems[id];
      localStorage.setItem('shopping-cart', JSON.stringify(savedItems))

    }
  }
}

export { addCartLocalStorage, getCartFromLocalStorage, removeItemFromLocalStorage };
