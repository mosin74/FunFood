import { useState } from "react";
import { IMG_CDN_URL } from "../config";
const CartFood = ({ name, price, description, imageId,decrement,Amount}) => {
    return (
        <>
      
                <div className="Menu-Recommendation cart-food">
                    <img src={IMG_CDN_URL+imageId} className="cart-food-img"/>
                    <p>{name}</p>
                    {/* <p><button onClick={()=>decrement()}>-</button><span>{Amount}</span><span>+</span></p> */}
                    <p>₹{price / 100}</p>
                </div >
             
        </>
    )

}

export default CartFood;