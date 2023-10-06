import { useSelector } from "react-redux";
import { useState , useEffect } from "react";
import CartFood from "./cartFood";



const CartPage = () => {


    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);



    return (

        <>
            <h1></h1>
            {cartItems.map((Info) => {
                return <>
                    <CartFood {...Info} />
                </>
            })}


        </>
    )

}

export default CartPage;