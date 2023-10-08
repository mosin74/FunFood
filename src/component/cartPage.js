import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartFood from "./cartFood";
import BillDetail from "./BillDetail";



const CartPage = () => {


    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);



    return (

        <>

            {/* <h2>Cart Page</h2> */}
            <div className="Main-cart-food">
                {cartItems.map((Info) => {
                    return <>
                        <CartFood {...Info} />
                    </>
                })}

                <BillDetail />
            </div>


        </>
    )

}

export default CartPage;