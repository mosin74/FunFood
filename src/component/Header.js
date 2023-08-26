import { useState } from "react";
import { ZomatoLogo, restaurantList } from "../config";
import { useState } from "react";






export const HeaderComponent = () => {




    return (
        <>

        <div className="nav-bar">
            <img src={ZomatoLogo} alt="" className="logo" />
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        <h1>{}</h1>

        </>
    );
}
