import { getCartFromLocalStorage } from "../Components/LocalStorage";



export const ProductsAndCartLoader=async()=>{
    const url=`products.json`;
    const res=await fetch(url);
    const products= await res.json();

    const savedCart=getCartFromLocalStorage();
    const savedProducts=[]
    for(const id in savedCart){
        const existItem=products.find(product=> product.id === id);
        if(existItem){
            const quantity =savedCart[id]
            existItem.quantity=quantity;
            savedProducts.push(existItem)
        }
    }
    


    return {products, savedProducts};
    // return products;
}